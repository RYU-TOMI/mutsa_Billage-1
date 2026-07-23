import { useState } from "react";

import GroupBuySection from "../components/mainpages/GroupBuySection";
import MainCategoryFilter from "../components/mainpages/MainCategoryFilter";
import RentalSection from "../components/mainpages/RentalSection";

const MainPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <main className="pb-24">
            <section className="px-5 pt-6">
                <h1 className="">
                    안녕하세요!
                </h1>

                <p className="">
                    필요한 물건을 함께 나누고 빌려보세요.
                </p>
            </section>

            <section className="mt-6 px-5">
                <input
                    type="text"
                    placeholder="(기능 구현 X) 필요한 물건을 검색해보세요"
                    className=""
                />
            </section>

            <MainCategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {(selectedCategory === "all" ||
                selectedCategory === "groupBuy") && (
                <GroupBuySection />
            )}

            {(selectedCategory === "all" ||
                selectedCategory === "rental") && (
                <RentalSection />
            )}
        </main>
    );
};

export default MainPage;