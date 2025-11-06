import "./Blog.css";

import label from "../../assets/blog.png";

import TapeStory from "../TapeStory/TapeStory";
import Peephole from "../Peephole/Peephole";
import Lightbyte from "../Lightbyte/Lightbyte";

function Blog() {
  return (
    <div className="blog">
      <img className="blog__label" src={label} alt="" />
      <TapeStory />
      <Peephole />
      <Lightbyte />
    </div>
  );
}

export default Blog;
