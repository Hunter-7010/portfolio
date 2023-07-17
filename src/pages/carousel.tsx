import { useState } from "react";
import { Carousel } from "react-3dm-carousel";
const CarouselPage = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const data = [
    {
      id: "1",
      title: "Beach Vacation",
      description: "Enjoy a relaxing getaway by the beach.",
      image: "beach.jpg",
    },
    {
      id: "2",
      title: "Mountain Hiking",
      description: "Embark on an adventurous hike in the mountains.",
      image: "mountain.jpg",
    },
    {
      id: "3",
      title: "City Tour",
      description: "Explore the vibrant streets of a bustling city.",
      image: "city.jpg",
    },
    {
      id: "4",
      title: "Cultural Experience",
      description: "Immerse yourself in the rich culture and traditions.",
      image: "culture.jpg",
    },
    {
      id: "5",
      title: "Wildlife Safari",
      description: "Discover exotic wildlife in their natural habitat.",
      image: "safari.jpg",
    },
    {
      id: "6",
      title: "Food Adventure",
      description: "Indulge in a culinary journey of diverse flavors.",
      image: "food.jpg",
    },
  ];
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center">
      <Carousel cards={data} setSelectedCaseIdx={setSelectedCaseIdx} />
    </div>
  );
};

export default CarouselPage;
