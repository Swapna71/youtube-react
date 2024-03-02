import React, { useState } from "react";
import { CHANEEL_IMG } from "../utils/constant";


const Subscribe = () => {
  const [likeButton, setLikeButton] = useState(false);
  const [dislikeButton, setDislikeButton] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  //   const dispatch= useDispatch();
  //   const subscribe = useSelector((store)=>store.Subscribe);
  const addSubscribe = () => {
    setSubscribe(!subscribe);
  };

  const addLikeButton = () => {
    setDislikeButton(false);
    setLikeButton(!likeButton);
  };

  const addDislikeButton = () => {
    setLikeButton(false);
    setDislikeButton(!dislikeButton);
  };
  console.log(dislikeButton, likeButton);
  return (
    <div className="flex w-[65vw] justify-between -mt-20 p-4 ml-4 bg-gray-100 rounded shadow-lg">
      <div className="flex text-center justify-around items-center">
        <img
          className="w-10 mx-4 h-10 object-cover  rounded-full"
          src={ CHANEEL_IMG }
          alt="chaanelimg"
        />
        <p className="shadow p-2  text-lg font-bold mr-4 rounded-3xl">user</p>
        {subscribe ? (
          <button
            onClick={() => addSubscribe()}
            className="bg-gray-200 text-gray-600 font-bold mx-4 p-2 shadow rounded-3xl"
          >
            Unsubscribe
          </button>
        ) : (
          <button
            onClick={() => addSubscribe()}
            className="bg-black text-white font-bold p-2 rounded-xl"
          >
            Subscribe
          </button>
        )}
      </div>
      <div className="flex text-center justify-around items-center">
        {likeButton ? (
          <img
            onClick={() => addLikeButton()}
            className="w-10 object-cover bg-gray-200   mx-4 m-2 rounded-xl p-1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEUAAAD////l5eUFBQXo6Ojx8fEnJydAQECRkZH6+vqVlZXJyckMDAz09PT39/fR0dFUVFQVFRVoaGjX19d4eHhdXV21tbUtLS2pqamcnJwiIiJMTEzAwMDe3t42NjaFhYVwcHD7lxSKAAAEPklEQVR4nO3c23aCMBAF0KggonIHAVHa///KIkqthGTCBJ156HlX98Ik5jJRrJaKc/iKk01SpnUUWr6VWATUpWrFb4qL3XsthHJK8ZJiTY9yPDHKNqNG+ZKpy4EYVU2YRIL/BpdAjRvUI15AiZp8UF12lKipFtUH+wUugFpvVKhvOtRJZRJn5LiwAGqvRIk9FcrP1agzFSpM1SiB+/7sUa6y8wnsqGCPchINqiBCrTUm4aGGKntUpEPhfpbtURctCjXds0fVWlRNg9IMU12+aFC6YUqIhgbValEbElRw1qJQ72+NynRjJxVKNe0kRelHBCEwE3VblG7i0sclQAUxwyflACaB2eywRWUQCvOmtiionZOgCoaocHrF/gxq6WCJioDxnOQHGRrPcYtkS9QXhCKYTwW65VUfgpnnFTJRzNE12wiPEKxmGshUXj+OugKzzm4x6nwcBQ4IFMt2aC6F3cuzQbmgCTciWKHU+4q/wR3S2KDAvicEqp3boDKw7wnhfxoFj5zIzmeBmjwlGuXju8P6zbJ7kIeReJR+t6XPxzf3wTlnlwZ5mIxG7Qy+vRT53lhUYGAS1YdR4HrvFtS8BY9y9Pt3j+yMsq9Pow4xoHyTPF9m9KDMc47rQEKFVeHBiauhN4XLmm4pqxEqMBhz+jTveVD3fIcvKJPufc99GbeGFuu4eO5flPnr2v4ACFyCIlP4T5T2HOo1ya2fwKs9bHIU6hh1HRXc/sEnwqIMZsHopFjU+0hCbCIcyryrYlJLqM3lMJ3TMB0/ZiZzO4u0Mkq16e1uB9TVYAljFV9CqY4HnAG1/X6zqV+UzUQpa20Wy3o+6v1xOaIQbert8VYMUTuOKHlEp0fFK4aoiVkCOeqxG8kKFYf8UO2w78cIlf5+OhvUuX5u0TBBefXfj+aAOqeH1w9mgNpIJ10MUOLEESXtIXNA5RxR8Xi9wgHVjk9wOKCOHFEJR1TJEZWODyY4oKRKeg4o6ayLASqRPo4BSvrpY4CK5fM3ctTUjTty1NSJLjFq+hYnLaqZPmSmRCWqgj1KVKGq7yB9UqrjXNI2JQ+bDFCqUhja3scSpSivokUpamFoUYqqIVpUxBHFsk0pPo4UpSrr/x/RR5H2EDiglDVfhKhSZSJElep703QoxcBJiWp09XpEqFxbfk2CSoGyRgJUG0EF4QQo+N4DASoBK+cp2hT4xw4UKLBKnQIFXq+jQIEtnQIFlqn/P6lHWLapmb1PVSi4LAr8Y4BXVLaeTjSUVCYLFC/O/JmBk2T2FdbwDZ/5FbHw9Ud9DO5nYQqaDa7xaGJwRQSBmvhTwxkxuZ51Q4H/DvFMXyS/CvF3HIzua95QM+52tI9ph5MfMaSt2V3pfuMDviU75FnXgOmGqeEtth7lml4QaP9OGv1L3sxo801ufLHuvkXk1ibXmMp6PBa71+hS7Q1SXaIZf/DyA++rTpDVTkisAAAAAElFTkSuQmCC"
            alt="islikebtn"
          />
        ) : (
          <img
            onClick={() => addLikeButton()}
            className="w-10 object-cover bg-gray-200   mx-4 m-2 rounded-xl p-1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AAADOzs7z8/OmpqZWVlZ9fX3AwMCOjo5fX19vb28eHh7d3d36+vrt7e3g4OA3NzdOTk6urq7m5uZmZma5ubmDg4OampojIyMqKioODg50dHRERETGxsYxMTHV1dUYGBhOZsJiAAAE9UlEQVR4nO2c2bqqMAyFy+CAzIOooOL7P+XZh6QIUmQ2uWDdbfl2+S1t0jYLhdi0adOmTfQyDsdTkp5jlxrkLSfXUKHpUcOgTFt762my6C1Ta8pyqImEOGstPaiZRJtJy87ETDpyWMdLfufSV3qNwjhIrFfBAMrGv9yL7CvSOdiEeo/7lJCpBSUeSHWgY2pDybgVkCGpoEQKVIRxQQFlYGSnG+sKKBFRBysVlAfhKidCUkOJC3GsUkIZxENdCSWs8tM9CZHogoKhvjNIkLqgnFf5MdVyTw3lhaRBQQ0lTuXHFwqiPx3UUJBqThREQnZJK/vCSA8piISIn+rnBE/1RoFUrela08wpP84okISALJe0EkpMmGg8uLfZumAQQmHmbR8guHRQBsTIXfsKIVR909cU4ZhKyjvfFcc/PkD9HkkO86PiUqEO9D8QDvNYcQmyz/3nSHIprhjmktf6NVIVzZVbYUjIBFuH65flJeTp6NdI8tCgHc3/ZFg0izxj92XW+1d1nl5benc8kBcD1bxcVbdv94WTl/zXAf38raMw1Hdc7JGhm+m+X2mkf04x7/k1ucHFXXfjqfnoeLYmJPkhCj+i0RE+7tiuOEOavOeKyekPRyqx6t8MR/m9Ywt8+d5UJfuzlOPb/f/U0P1NJcNB1wlGOrjRoBFf49tIJk17VgMIH17nDuowotWwFsxOo5neswljud19gp+MaPVa9XeBnwRHs18pTjWM0Biuv27KHz1NXuqdIjPVHv5Mh9UMjaTWVbgw1+6zQqPrmc+KCr4eLoWSwU1Agv2/43VxkNv+HKZSUYVVPkHHrj2OIYIYkBnCTertzJQhp+m1qO4Rjjhpw0GFXbZY7UXO010FNeb4D3rqjM9OsVGfqCKDBovJUBq2MKqPe4TxZT8dSjItWeiHcfW3eZwHFS66eIPN9NWZB2UtexKNibSYBbX0ehKh9BlQmXL3QgsVLF9Gh7SVTX98a5Sr4zK73PzJUGvsLuHU6G9bNBVqjRI6sFguKyjcI06P6CtAHWBdHnGCwiK4ZnCCwqX1/+UmGygXoGydExTuqsplBx8o5x0A+UC50FUmKyg8d8h5QcFBV8ALCtfovKB0jlCw83vxgoJ8HPKCgqOWlBWUB/vbMyso6KibwwkKj+PLMykuUNI/+2AEFYPNCuuYTKBw2Xl1GEJhq0ygDlXgZAclzVcbVLcgIkj3AhOoqBYQ2EBVO3ZOUFANk3UoHlBYUZElPx5QXi3xsYGCcV65CHhAQY2usg6xgMLMV1WROUChPVyrIBhA6YHWCAgMoKo3yW7v2hM5lDxVrBdYyaFUBVYuUI0KBjnUqc1ED2UpmiOHKlvLmqUeaihIxdem34IaClZ3QbPGSgyFC6kPw+xUqIUsroWt+opToV76IlAQEK4ft59cQ7aXoMIqw6fjcoYF4DjbAWCATyr79CTN8SWEcwvu+DsULfPWPFtJ0vKijlCMxres5U2ZacDRdqfJwrWdwtE3F2q+FG8aTHWajTeHdihQOPrQkzd8yEJZ52WYr2WYVGYnfKdzsHsRXw94CuHn3242UJba+Yg+z3yYZcyr+zzjy737dkO060pW0pwd5Md+5U1HrDCcwwAfbYfOTvdInuMdXk3eODd62atrM03wo//k3Q7f6gep6Vc/FBFNf8dhRbl+tE+sPiX7iNOvXW3atGnTppr+AdDHOkgfd1zpAAAAAElFTkSuQmCC"
            alt="islikebtn"
          />
        )}
        {dislikeButton ? (
          <img
            onClick={() => addDislikeButton()}
            className="w-10 object-cover bg-gray-200   mx-4 m-2 rounded-xl p-1"
            src="data:image/jpeg;base64,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"
            alt="isDislikeBtn"
          />
        ) : (
          <img
            onClick={() => addDislikeButton()}
            className="w-10 object-cover bg-gray-200   mx-4 m-2 rounded-xl p-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQej4ZzNDl1LhfeNsK-hvnmBSUGYXlwP_zEdK0p8m5fRiUQ1rOC2SA2waJVew&s"
            alt="isDislikeBtn"
          />
        )}

        <button className="bg-gray-200  p-2  font-bold  rounded-3xl">
          share
        </button>
        <button className="bg-gray-200 p-2  font-bold  rounded-3xl">
          save
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
