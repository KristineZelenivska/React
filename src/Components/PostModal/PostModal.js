import React, { Component } from "react";
import "./PostModal.css";

class PostModal extends Component {
  render() {
    const { onClose, onInputChange, onImageUpload, onPostSubmit } = this.props;

    return (
      <div className="PostModal">
        <div className="PostModal__content">
          <div className="PostModal__content__title">Upload image</div>
          <form>
            <div className="form-group">
              <label>Caption:</label>
              <input onChange={onInputChange} className="form-control" type="text" />
            </div>

            <div className="form-group">
              <input onChange={onImageUpload} type="file" className="form-control-file" />
            </div>
          </form>
          <div className="PostModal__buttons">
            <button className="btn btn-light" onClick={onClose}>Cancel</button>
            <button onClick={onPostSubmit} className="btn btn-primary">Upload</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostModal;