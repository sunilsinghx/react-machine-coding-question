import { useEffect, useState } from "react";

function DisplayImages() {
  const [imagesUrl, setImagesUrl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://images-api.nasa.gov/search?q=moon");

        const data = await res.json();

        const URLs = data.collection.items.flatMap((item) =>
          item.links
            ?.filter((link) => link.render === "image")
            .map((link) => link.href)
        );

        setImagesUrl(URLs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      {imagesUrl.map((url) => (
        <img src={url} key={url} />
      ))}
    </div>
  );
}

export default DisplayImages
