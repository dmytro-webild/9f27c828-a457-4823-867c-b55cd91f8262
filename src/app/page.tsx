"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Dining",
          id: "dining",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Urban Palate"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Experience the Art of Culinary Excellence"
      description="Discover a curated collection of world-class cuisines in the heart of the city. Join us for a journey of taste and texture at Urban Palate."
      buttons={[
        {
          text: "Explore Dining",
          href: "#dining",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/black-wooden-table_417767-153.jpg",
          imageAlt: "Luxurious dining hall",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-grilled-chicken-fillet-with-vegetable-salad-chips-plate_140725-11392.jpg",
          imageAlt: "Gourmet culinary dish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-woman-sitting-table-with-desserts-drinks-flowers-cafe_23-2148001711.jpg",
          imageAlt: "Inviting bistro space",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-lovely-date_23-2148422309.jpg",
          imageAlt: "Happy couple on a lovely date",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dinner-set-sushi-rolls-salads-cocktails-hookah-side-view_141793-3100.jpg",
          imageAlt: "Dinner set sushi rolls salads cocktails hookah side view",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Destination for Food Lovers"
      description={[
        "Urban Palate brings together the finest local chefs and global culinary traditions under one roof.",
        "Our mission is to create a vibrant dining community where quality meets convenience.",
        "From farm-to-table ingredients to experimental flavors, every meal is prepared with passion and precision.",
      ]}
    />
  </div>

  <div id="dining" data-section="dining">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Artisan Beef Burger",
          price: "$18",
          variant: "Classic Grille",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-bruschetta-meat-front-view_23-2148516952.jpg",
        },
        {
          id: "p2",
          name: "Fresh Sushi Selection",
          price: "$24",
          variant: "Coastal Flavors",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-shrimp-with-sauce-plate_141793-11283.jpg",
        },
        {
          id: "p3",
          name: "Truffle Pizza",
          price: "$22",
          variant: "Fire Oven",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sliced-pizza-with-parmesan-cutter_23-2148753762.jpg",
        },
        {
          id: "p4",
          name: "Homemade Pasta",
          price: "$20",
          variant: "Rustic Italy",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-dessert-white-plate-decorated-with-flowers_23-2151973729.jpg",
        },
        {
          id: "p5",
          name: "Superfood Poke Bowl",
          price: "$16",
          variant: "Fresh Greens",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-chinese-cabbage-salad-plate-black-background_123827-21052.jpg",
        },
        {
          id: "p6",
          name: "Vanilla Bean Pastry",
          price: "$12",
          variant: "Patisserie",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-chocolate-cake_23-2148549948.jpg",
        },
      ]}
      title="Our Signature Culinary Collections"
      description="Explore our diverse menu featuring dishes crafted by award-winning local chefs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "12+",
          description: "Gourmet Kitchens",
        },
        {
          id: "m2",
          value: "500+",
          description: "Daily Visitors",
        },
        {
          id: "m3",
          value: "100%",
          description: "Locally Sourced",
        },
      ]}
      title="Community Impact"
      description="Driven by a passion for quality and an commitment to our vibrant neighborhood."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          role: "Food Blogger",
          testimonial: "The diversity of options here is unmatched. Every visit feels like a new culinary discovery.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-african-american-woman-eating-german-salty-pastry-pretzel-doing-ok-sign-with-fingers-excellent-symbol_839833-29953.jpg",
        },
        {
          id: "t2",
          name: "Jason Wu",
          role: "Local Architect",
          testimonial: "A perfect blend of ambiance and flavor. It's my go-to spot for business lunches and casual dinners.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-having-fun-while-eating-dinner-communicating-with-friends-dining-table_637285-3342.jpg",
        },
        {
          id: "t3",
          name: "Elena Rodriguez",
          role: "University Professor",
          testimonial: "I love the emphasis on locally sourced ingredients. The food tastes as fresh as it looks.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-asian-man-friends-reunion_23-2149244687.jpg",
        },
        {
          id: "t4",
          name: "Marcus Chen",
          role: "Tech Founder",
          testimonial: "Finally, a place that balances gourmet quality with true convenience. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5054.jpg",
        },
        {
          id: "t5",
          name: "Sofia Rossi",
          role: "Designer",
          testimonial: "The atmosphere is buzzing and the service is always top-notch. Love it!",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-eating-seafood-dish-with-salmon_23-2150463267.jpg",
        },
      ]}
      title="Voices of the Community"
      description="Hear what our regulars have to say about their dining experience at Urban Palate."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "KitchenCraft",
        "FreshHarvest",
        "CoastalSupply",
        "UrbanFarms",
        "GourmetGrid",
        "EliteOven",
        "PrimeChef",
      ]}
      title="Proud Partners"
      description="We collaborate with the best providers to bring you unparalleled culinary standards."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Are there vegetarian options?",
          content: "Yes, every kitchen in our court offers a variety of vegetarian and vegan options.",
        },
        {
          id: "f2",
          title: "Is parking available?",
          content: "We offer complimentary parking for all our visitors in the attached facility.",
        },
        {
          id: "f3",
          title: "Can I reserve a table?",
          content: "While we are a casual dining hall, our team can arrange seating for large group gatherings.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about dining at Urban Palate."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Want to inquire about events or corporate bookings? Reach out to us today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/wedding-hall-with-white-wooden-furniture-interior_114579-2232.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Urban Palate"
      columns={[
        {
          title: "Navigate",
          items: [
            {
              label: "Hero",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Dining",
              href: "#dining",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Urban Palate. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
