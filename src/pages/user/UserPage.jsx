import { useLoaderData } from "react-router-dom";
import RecommendedCard from "../../components/recommended-card";
import { LeftSide } from "./components/left-side";
import { RightSide } from "./components/right-side";
import { useEffect, useState } from "react";

const UserPage = () => {
  const user = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SEVER_ADDRESS}/api/users`
      );
      const data = await res.json();

      setCards(data);
      setLoading(false);
    };

    return () => {
      fetchCards();
    };
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-start min-h-screen pt-[80px] px-10 bg-slate-100/20">
        <LeftSide user={user[0]} />
        <RightSide
          about={user[0].about}
          image={user[0].image}
          name={user[0].name}
          price={user[0].price}
          taskComplexity={user[0].taskComplexity}
          rating={user[0].rating}
          reviewCount={user[0].reviewCount}
        />
      </section>
      <div className="mb-10 px-10">
        <h1 className="text-[40px] font-bold mb-5">Recommended for you</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {cards.length > 0
            ? cards
                .filter(
                  (card) =>
                    (card.name !== user[0].name &&
                      card.rating <= user[0].rating) ||
                    card.reviewCount <= user[0].reviewCount
                )
                .map((card) => (
                  <RecommendedCard
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    intro={card.intro}
                    rating={card.rating}
                    price={card.price}
                    reviewCount={card.reviewCount}
                  />
                ))
            : loading && <h1>Loading...</h1>}
        </div>
      </div>
    </>
  );
};

export default UserPage;
