import React from "react";

export const showLoading = () => (
  <>
    <div className="spinner-grow text-primary" role="status"></div>
    <span className="visually-hidden"></span>
    <div className="spinner-grow text-secondary" role="status"></div>
    <span className="visually-hidden"></span>
    <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden"></span>
    </div>
    <div className="spinner-grow text-danger" role="status">
      <span className="visually-hidden"></span>
    </div>
    <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden"></span>
    </div>
    <div className="spinner-grow text-info" role="status">
      <span className="visually-hidden"></span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden"></span>
    </div>
    <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden"></span>
    </div>
  </>
);
