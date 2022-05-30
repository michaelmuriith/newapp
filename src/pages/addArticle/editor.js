import React, {Component} from 'react';
import { render } from 'react-dom';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const AddArticle = () => {
  return (
      <div>
        <input type="email" class="form-input px-4 py-3 rounded-full"/>
        <Editor
          toolbarClassName='text-black flex sticky top-0 z-50 !justify-center max-w-5xl mx-auto'
          editorClassName=' text-black mt-0 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border'
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: false },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
  );
};

export default AddArticle;