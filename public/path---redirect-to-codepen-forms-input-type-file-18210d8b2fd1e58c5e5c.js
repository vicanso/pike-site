webpackJsonp([0xb3f03a8f8728],{401:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"class FileInput extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.handleSubmit = this.handleSubmit.bind(\\n      this\\n    );\\n  }\\n  // highlight-range{5}\\n  handleSubmit(event) {\\n    event.preventDefault();\\n    alert(\\n      `Selected file - ${\\n        this.fileInput.files[0].name\\n      }`\\n    );\\n  }\\n\\n  render() {\\n    return (\\n      <form\\n        onSubmit={this.handleSubmit}>\\n        <label>\\n          Upload file:\\n          {/* highlight-range{1-6} */}\\n          <input\\n            type=\\"file\\"\\n            ref={input => {\\n              this.fileInput = input;\\n            }}\\n          />\\n        </label>\\n        <br />\\n        <button type=\\"submit\\">\\n          Submit\\n        </button>\\n      </form>\\n    );\\n  }\\n}\\n\\nReactDOM.render(\\n  <FileInput />,\\n  document.getElementById(\'root\')\\n);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-forms-input-type-file-18210d8b2fd1e58c5e5c.js.map