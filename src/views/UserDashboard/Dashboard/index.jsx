import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef, useState } from "react";

const Dashboard = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file)); // Create preview URL
    }
  };
  return (
    <div>
      <form
        // onSubmit={handleSubmit}
        className="bg-primary-light p-6 rounded-lg shadow-card max-w-lg mx-auto space-y-4"
      >
        {/* Title */}
        <input
          type="text"
          name="title"
          //   value={title}
          //   onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="w-full p-3 rounded bg-primary-dark text-neutral-white"
        />

        {/* Description */}
        <textarea
          name="description"
          //   value={description}
          //   onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-3 rounded bg-primary-dark text-neutral-white h-32"
        />

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Image Preview or Add Button */}
        {previewUrl ? (
          <div className="relative w-full h-48">
            <img
              src={previewUrl}
              alt="Preview"
              className="rounded-lg w-full h-full object-cover border border-neutral-midGray"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="absolute top-2 right-2 bg-primary-dark text-neutral-white p-2 rounded-full hover:bg-accent transition"
            >
              <Icon icon="mdi:plus" width="20" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="w-full flex flex-col items-center justify-center border-2 border-dashed border-neutral-midGray rounded-lg h-48 hover:border-accent hover:text-accent transition"
          >
            <Icon icon="mdi:plus" width="20" />
            <span className="mt-2 text-neutral-midGray">Add Image</span>
          </button>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-accent text-neutral-white px-6 py-2 rounded hover:bg-accent-light"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
