// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  Layout,
  Fit,
  Fill,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  stairs: require("../assets/stairs.svg"),
  idea: require("../assets/idea.svg"),
  smartphone: require("../assets/smartphone.svg"),
  rocket: require("../assets/rocket.svg"),
  facebook: require("../assets/facebook.svg"),
  whatsapp: require("../assets/whatsapp.svg"),
  user: require("../assets/user.svg"),
  man: require("../assets/man.svg"),
  businessman: require("../assets/businessman.svg"),
  loupe: require("../assets/loupe.svg"),
  coding: require("../assets/coding.svg"),
  money: require("../assets/money.svg"),
  coffee: require("../assets/coffee-cup.svg"),

  screens: {
    listing: require("../assets/listing-with-skin.png"),
    map: require("../assets/map-with-skin.png"),
  },
  uml: {
    architecture: require('../assets/system-environment.pu.png'),
  },
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="secondary">
            ManiHome
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fill bold>
            Find your house / appartment / roomate
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fill bold>
            in a mobile App !
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>Motivations</Heading>
          <Image src={images.stairs} style={{ width:350 }}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Layout>
          <Fill>
            <Image src={images.idea} width={150} style={{ margin: 40 }} />
          </Fill>
          <Fill>
            <Image src={images.smartphone} width={150} style={{ margin: 40 }} />
          </Fill>
          <Fill>
            <Image src={images.rocket} width={150} style={{ margin: 40 }} />
          </Fill>
          <Fill>
            <Image src={images.money} width={150} style={{ margin: 40 }} />
          </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Problem Definition</Heading>
          <List>
            <ListItem>Too many choices</ListItem>
            <ListItem>No easy plateform</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps style={{ marginBottom: 100 }}>
            Too many choices
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.businessman} width={100}/>
            </Fill>
            <Fill>
              <Image src={images.facebook} width={100}/>
            </Fill>
            <Fill>
              <Image src={images.whatsapp} width={100}/>
            </Fill>
            <Fill>
              <Image src={images.man} width={100}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps style={{ marginBottom: 100 }}>
            No search / filters
          </Heading>
          <Image src={images.loupe} width={350} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" style={{ marginBottom: 100 }}>
            ManiHome
          </Heading>
          <Layout>
          <Fill>
            <Appear>
              <Image src={images.screens.map} height={600}/>
            </Appear>
          </Fill>
          <Fill>
          <Appear>
            <Image src={images.screens.listing} height={600}/>
          </Appear>
          </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps style={{ marginBottom: 100 }}>
            Design Principle
          </Heading>
          <Layout>

          <Fill>
            <Image src={images.uml.architecture} style={{margin: 50}} />
          </Fill>

          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps style={{ marginBottom: 100 }}>
            Buisness Model
          </Heading>
          <Image src={images.money} width={350} />
        </Slide>



        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps style={{ marginBottom: 100 }}>
            Work done
          </Heading>
          <List>
            <ListItem>Workflow</ListItem>
            <ListItem>Project scope</ListItem>
            <ListItem>Starter for API (server, Elixir)</ListItem>
            <ListItem>Starter for the mobile app (cross-platform, ReactNative)</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps style={{ marginBottom: 100 }}>
            Work yet to be done...
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.coding} style={{margin: 50}}/>
            </Fill>
            <Fill>
              <Image src={images.coffee} style={{margin: 50}} />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={[]} bgColor="tertiary">
          <List>
            <ListItem>Finish App and Server</ListItem>
            <ListItem>Q/A testing</ListItem>
            <ListItem>Playstore / Appstore publishing</ListItem>
            <ListItem>Communication</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Demonstration
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Thanks you for listening !
          </Heading>
          <Appear>
            <Heading size={5} textColor="primary" caps>
              Any questions ?
            </Heading>

          </Appear>
        </Slide>

      </Deck>
    );
  }
}
