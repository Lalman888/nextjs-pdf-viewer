// interface searchProps{
//   cx:string;
//   searchBox?:HTMLElement;
//   searchResults?:HTMLElement;
//   scope?:Document;
// }

export function cse(props) {
  const { cx, scope: document = window.document } = props;
  const searchBox = props.searchBox ?? document.getElementById("cseSearchBox");

  const searchResults =
    props.searchResults ?? document.getElementById("cseSearchResults");
  const win = window;

  function render() {
    const cse = win.google.search.cse;
    console.log(cse);
    if (searchBox) {
      cse.elemet.render({
        div: searchBox,
        tag: "searchbox-only",
        resultUrl: window.location.href,
      });
    }
    if (searchResults) {
      cse.elemet.render({
        div: searchResults,
        tag: "searchresults-only",
        attributes: {
          linkTarget: "_blank",
        },
      });
    }
  }
  if (!searchBox && !searchResults) {
    return;
  }

  win.__gcse = {
    parsetags: "explicit",
    callback: function () {
      if (window.document.readyState == "complete") {
        render();
      } else {
        win.google.setOnLoadCallback(render, true);
      }
    },
  };
}
