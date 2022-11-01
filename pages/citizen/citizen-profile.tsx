/* This example requires Tailwind CSS v2.0+ */
import ReviewOptionSelect from "@components/new-changes/ReviewOptionSelect";
import { PaperClipIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/helpers";
import { useCallback, useEffect, useState } from "react";
import {
  TbBan,
  TbClipboardOff,
  TbFileUpload,
  TbShieldCheck,
  TbDownload,
} from "react-icons/tb";

export default function CitizenProfile() {
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");

  const CitizenFields = ({ title, data }: { title: string; data: string }) => (
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900">{data}</dd>
    </div>
  );

  const ApprovedPill = () => (
    <div className="bg-teal-500 text-white text-xs px-4 py-1 rounded-full flex justify-center items-center space-x-1">
      <TbShieldCheck className="h-5 w-5" />
      <span>Approved</span>
    </div>
  );

  const RejectedPill = () => (
    <div className="bg-red-400 text-white text-xs px-4 py-1 rounded-full flex justify-center items-center space-x-1">
      <TbBan className="h-5 w-5" />
      <span>Rejected</span>
    </div>
  );

  const ResubmitPill = () => (
    <div className="bg-slate-700 text-white text-xs px-4 py-1 rounded-full flex justify-center items-center space-x-1">
      <TbFileUpload className="h-5 w-5" />
      <span>Submit again</span>
    </div>
  );

  const PendingPill = () => (
    <div className="bg-gray-400 text-white text-xs px-4 py-1 rounded-full flex justify-center items-center space-x-1">
      <TbClipboardOff className="h-5 w-5" />
      <span>Pending</span>
    </div>
  );

  //   This will help to render the correct pill based on the type of status from the backend/API
  const nocDocStatus = useCallback((value: string) => {
    if (value == "Approved") return <ApprovedPill />;
    else if (value == "Rejected") return <RejectedPill />;
    else if (value == "Pending") return <PendingPill />;
    else if (value == "Re-Submit") return <ResubmitPill />;
    return <></>;
  }, []);

  //   This will help to render the correct pill based on the type of status from the backend/API

  const StatusBadge = ({
    label,
    className,
    variant,
    color = "teal",
    children,
  }: {
    label: string;
    variant: string;
    className?: string;
    color?: string;
    children?: React.ReactNode;
  }) => {
    switch (variant) {
      case "succes":
        return (
          <span className="bg-green-200 text-green-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {label}
          </span>
        );
      case "reject":
        return (
          <span className="bg-red-200 text-red-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {label}
          </span>
        );
      case "re-submit":
        return (
          <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {label}
          </span>
        );
      case "re-verify":
        return (
          <span className="bg-indigo-200 text-indigo-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {label}
          </span>
        );
      default:
        return (
          <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
            Pending
          </span>
        );
    }
  };

  const fileDocStatus = useCallback((value: string) => {
    if (value == "Approved")
      return <StatusBadge label="Checked" variant="success" />;
    else if (value == "Rejected")
      return <StatusBadge label="Rejected" variant="reject" />;
    else if (value == "Pending")
      return <StatusBadge label="Re-verify" variant="re-verify" />;
    else if (value == "Re-Submit")
      return <StatusBadge label="Re-submit" variant="re-submit" />;
    return <></>;
  }, []);

  //   Just to mock the status using randomized function
  useEffect(() => {
    let status_values = ["Approved", "Rejected", "Pending", "Re-Submit"];
    let random = Math.floor(Math.random() * status_values.length);
    setStatus(status_values[random]);
    nocDocStatus(status);
  }, [status, nocDocStatus]);

  const DocAttachments = ({
    data,
    fileVerify,
    setFileVerify,
  }: {
    data: string;
    fileVerify: boolean;
    setFileVerify?: () => void;
  }) => (
    <li className="pl-3 pr-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between text-sm relative">
      <div className="absolute sm:top-2 left-2">
        {fileDocStatus("Approved")}
      </div>
      <div className="flex-1 flex items-center pb-4 mt-6 sm:pb-0">
        <PaperClipIcon
          className="flex-shrink-0 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <span className="ml-2 flex-1 w-0 text-ellipsis">{data}</span>
      </div>

      <div className="flex justify-end items-center space-x-3">
        <a
          href="#"
          className="font-medium bg-gray-100 px-3 py-2 rounded text-indigo-600 hover:text-indigo-500"
        >
          View
        </a>

        <ReviewOptionSelect />
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          <TbDownload className="h-5 w-5" />
        </a>
      </div>
    </li>
  );

  return (
    <div className="bg-white shadow overflow-hidden mx-auto sm:rounded-lg max-w-7xl mt-10">
      <div className="flex justify-between items-center px-4 py-5 sm:px-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Citizen Profile Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        {nocDocStatus(status)}
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
          <CitizenFields data="Margot Foster" title="Full Name" />
          <CitizenFields
            data="margotfoster@example.com"
            title="Email address"
          />
          <CitizenFields title="Date of birth" data="12/10/1998" />
          <CitizenFields title="Application for" data="Travel" />
          <CitizenFields title="Qualification" data="Graduate" />
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="sm:col-span-3">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul
                role="list"
                className="border border-gray-200 rounded-md divide-y divide-gray-200"
              >
                <DocAttachments data="travel_documents.pdf" fileVerify={true} />
                <DocAttachments
                  data="coverletter_back_end_developer.pdf"
                  fileVerify={false}
                />
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
