import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotosAsync } from "../../store/features/photoSlice";
import Header from "../Header/Header";
import "./style.scss";

const API_URl = "https://picsum.photos/v2/list?page=3&limit=100";
function Photos() {
  const photoData = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const pageNumbers = Math.ceil(photoData.photos.length / postsPerPage);

  useEffect(() => {
    dispatch(getPhotosAsync(API_URl));
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = photoData.photos.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="main-wrapper">
      <div className="name-wrapper">
        <Header />
        <div className="title">
          <h1 className="welcome">Welcome to</h1>
          <h1 className="moment" data-text="Captured Moments">
            Captured Moments
          </h1>
        </div>
      </div>
      <div className="wrapper">
        {currentPost.map((photo) => (
          <div key={photo.id} className="wrapper-photo">
            <img src={photo.download_url} alt="photograph" className="img" />
            <div className="info">
              <h3 className="ph">Ph:{photo.author}</h3>
              <a
                href={photo.url}
                target="_blank"
                rel="noreferrer"
                className="href"
              >
                Source of image
              </a>
            </div>
          </div>
        ))}
        <Stack className="pagination">
          <Pagination
            color="primary"
            variant="outlined"
            showFirstButton
            showLastButton
            count={pageNumbers}
            page={currentPage}
            onChange={(_, num) => setCurrentPage(num)}
          />
        </Stack>
      </div>
    </div>
  );
}
export default Photos;
