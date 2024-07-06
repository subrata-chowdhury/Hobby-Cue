import React from 'react';
import { Card } from './Card';

const CardsSection = () => {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <Card
                    iconSrc="groups.svg"
                    name="Teacher"
                    text="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
                    btn="Connect"
                />
                <Card
                    iconSrc="location.svg"
                    name="Place"
                    text="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
                    btn="Meet up"
                />
                <Card
                    iconSrc="basket.svg"
                    name="Product"
                    text="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
                    btn="Get it"
                />
                <Card
                    iconSrc="Calander.svg"
                    name="Program"
                    text="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
                    btn="Attend"
                />
            </div>
        </div>
    );
};

export default CardsSection;