import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase-config";

const CreatePost = ({setIsAuth}) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/")
  };

  useEffect(() => {
    if(!setIsAuth){
        navigate("/login")
    }
  }, []);

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header text-center bg-light">New Post</div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="email"
              className="form-control"
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Post Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Post"
              onChange={(event) => {
                setPost(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-lg btn-primary"
              onClick={createPost}
            >Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
