import { useState, useEffect } from "react";
// material
import { Box, Stack, Container, Typography } from "@mui/material";

import TeamComponent from "components/TeamComponent";
import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import { Link, Element, scroller } from "react-scroll";
const TEAM_INFOS = [
  {
    number: 1,
    name: "FIGHTER",
    description1:
      "In the distant past a warrior named Kuang Tu Nha helped the Chou dynasty defeat Tru, a dangerous warrior that had threatened everything. The legend of this battle has drawn hundreds of the greatest Taoists to study his hand to hand style, hoping to become as great as the legendary warrior.",
    description2:
      "Fighters are warriors who focus on close combat. They use their fists to make rapid attacks to wear down their enemies.",
  },
  {
    number: 2,
    name: "SWORDSMAN",
    description1:
      "Swordsman have travelled the world for centuries, gathering in places of power to study and hone their abilities. A true swordsman spends decades honing their craft until their sword is almost a third limb. They are some of the most deadly and feared warriors in the world.",
    description2:
      "Swordsman focus on close combat using blades. They can deal massive damage with their blades. They keep their enemies from attacking the weaker members of their party.",
  },
  {
    number: 3,
    name: "MAGE",
    description1:
      "Mages have focused their power into the summoning of demons and manipulation of the three realms; Heaven, Earth and Human. Their powers made the people considered evil spirits and they withdrew from the world for a time. Recently they finally revealed themselves again.",
    description2:
      "They focused on helping others and soon people began to see them as allies rather than enemies. A mage keeps his foes at a distance, using staves to launch magical attacks at their enemies. While weak physically their powers can cause massive damage.",
  },
  {
    number: 4,
    name: "NINJA",
    description1:
      "Ninjas are a mysterious organization that has existed hidden in the shadows for centuries. Long ago they served under the Zhou dynasty, striking down their foes. They are feared by the people who know of them, as one can never know when or where they may strike. Their hidden blades and clever poisons have killed hundreds of heroes and knights.",
    description2:
      "Ninjas focus on close combat against their foes. They are far more flexible than other warriors, using a variety of different weapons to cause a variety of effects.",
  },
  {
    number: 5,
    name: "PRIEST",
    description1:
      "During the warring states period the priests went deep into the Mon Vong swamp away from the fighting to focus on peace rather than war. For 50 years he meditated and studied the local plants and herbs. As time passed he unlocked the secrets of hundreds of potions, becoming an expert in pharmacology. They also learned many magical spells of great power.",
    description2:
      "The priest is a great healer, his powers keeping people alive in the most dangerous situations. When forced to fight the priest uses his staff to send magical attacks at his foes from a great distance.",
  },
  {
    number: 6,
    name: "TAOIST",
    description1:
      "There are many places of power across the world but the Taoists have gathered at the peak of Kun Lun. Here they can focus on the heavens, contacting demons and other celestial creatures, making deals with them to call on their abilities in the future. When not communing with the universe they study their skill with the blade.",
    description2:
      "Taoists are ranged warriors who use a staff to summon allies to fight for them. When not calling on allies they use a sword to attack their foes.",
  },
  {
    number: 7,
    name: "KNIGHT",
    description1:
      "Knight who follow the teaching of an unknown warrior in the past. His teachings are considered some of the most difficult and beautiful of all the warriors in the world. Warrior are part of a strong military tradition and they expect their warriors to train constantly to maintain peak physical health.",
    description2:
      "Knight are close quarter sword/Spear wielders focused on attacking many enemies.",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Box
      sx={{
        right: -100,
        display: "block",
        background: "url(/nextArrow.png)",
        width: 130,
        height: 95,
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": { transform: "translate(0, -50%) scale(1.2)" },
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Box
      sx={{
        left: -100,
        display: "block",
        background: "url(/prevArrow.png)",
        width: 130,
        height: 95,
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": { transform: "translate(0, -50%) scale(1.2)" },
      }}
      onClick={onClick}
    />
  );
}

export default function Detailpage() {
  const [currentTeam, setCurrentTeam] = useState(1);
  const location = useLocation();
  const target = location.hash.slice(1);
  // console.log(target);
  useEffect(() => {
    scroller.scrollTo(target, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }, [target]);

  const sliderSettings = {
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ background: "url(/bg.png)", backgroundSize: "100% 100%" }}>
      <Container maxWidth="xl">
        <Stack
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          sx={{ px: { xs: 2, md: 18 } }}
        >
          <Box component="img" src="/logo.png" sx={{ mt: 10 }} />
          <Typography variant="h4" sx={{ mt: 5 }}>
            Destiny War is bringing back the classic MMORPG gameplay, Interact
            to many players, friends, and family to enjoy the excitement and
            intensity of being a warrior. Explore the new virtual world do your
            daily quest to collect rewards and grind digital assets and turn
            them into REAL MONEY!
          </Typography>
          <Typography variant="h4" sx={{ mt: 3 }}>
            We will be selling a total of 50000 Warriors in our pre-sale, Every
            warrior will get a random wing, random costume, and Destiny box. Our
            minimum target is to sell 20000 and after that we will be releasing
            the beta game after 1 month.
          </Typography>
        </Stack>

        {/* <Stack sx={{ px: { xs: 2, md: 18 }, mt: 10 }}>
          <Stack direction="row" justifyContent="center">
            <MotionInView variants={varFadeInUp}>
              <Box component="img" src="/texts/choose_class.png" />
            </MotionInView>
          </Stack>
          <Stack
            spacing={1}
            direction="row"
            justifyContent={{ xs: "center", md: "space-between" }}
            flexWrap="wrap"
          >
            {[...Array(7)].map((item, index) => (
              <TeamComponent
                number={index + 1}
                changeTeam={() => setCurrentTeam(index + 1)}
              />
            ))}
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="flex-start"
            spacing={5}
            sx={{ mt: 8 }}
          >
            <Stack flex={1}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={`/teams/title${currentTeam}.png`}
                  sx={{ width: 300 }}
                />
              </Stack>
              <Typography>
                {TEAM_INFOS[currentTeam - 1].description1} <br />
                <br />
                {TEAM_INFOS[currentTeam - 1].description2}
              </Typography>
            </Stack>
            <Stack flex={1}>
              <Box component="img" src={`/teams/team${currentTeam}.png`} />
            </Stack>
          </Stack>
        </Stack>
        <Element name="roadmap">
          <Stack sx={{ mt: 3 }}>
            <Stack direction="row" justifyContent="center" sx={{ mb: 5 }}>
              <MotionInView variants={varFadeInUp}>
                <Box component="img" src="/texts/roadmap.png" />
              </MotionInView>
            </Stack>
            <Stack sx={{ "& .slick-slide:focus": { outline: "none" } }}>
              <Slider {...sliderSettings}>
                {[...Array(9)].map((item, index) => (
                  <Box sx={{ px: 5 }}>
                    <Box
                      // component="img"
                      src={`/roadmap/${index + 1}.png`}
                      sx={{
                        width: 420,
                        height: 460,
                        background: `url(/roadmap/${index + 1}.png)`,
                        backgroundSize: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Stack>
          </Stack>
        </Element> */}
      </Container>
    </Box>
  );
}
