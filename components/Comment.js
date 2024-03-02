

const Comment = ({ data }) => {
    const { name, comment } = data;
    return (
      <div className="flex m-6">
        <img
          className="w-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
          alt="user"
        />
        <div className="ml-4 px-4 hover:bg-gray-300 rounded w-[45vw]">
          <p className="font-semibold text-sm ">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    );
  };

  export default Comment;