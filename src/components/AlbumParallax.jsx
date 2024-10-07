import { ParallaxScrollSecond } from "./ui/parallax-scroll-2";

export function AlbumParallax() {
  return (
    <div className="hidden sm:block mt-36">
      <p className="section-heading text-center">
        Take a peek at the top songs and albums on DreamStreamer
      </p>
      <ParallaxScrollSecond images={images} />
    </div>
  );
}

const images = [
  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a8/2e/b4/a82eb490-f30a-a321-461a-0383c88fec95/15UMGIM23316.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e0/fe/29/e0fe29b5-d7fe-e0d7-04e5-dd0b989a8675/780163484526.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8f/4d/6e/8f4d6e87-beb3-b95f-d2ef-17ab4c296073/mzi.oppgthel.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a8/00/7a/a8007a02-e081-45cd-ef27-4785188c481d/PCCG_01800.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d5/01/c2/d501c21b-266f-2db3-2abf-ca5d928e5649/886445180336.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/5b/73/f45b735a-8d7a-9713-b217-0f8e1593c28b/794043201943.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9f/7e/60/9f7e6017-3bd3-570f-7890-eba0f3aa6c33/mzi.hxbvposl.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Features/77/19/55/dj.asmuuymy.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e3/62/9f/e3629fa9-f221-46c4-3e9c-8176cf70aed0/cover.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5d/55/36/5d5536c5-b604-c5c8-563e-f047dcc29ed4/8904337274238.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/16/1a/e7/161ae7fa-026b-453a-e443-626924179812/00602527174396.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/88/8e/5d/888e5d4e-a2a4-aa18-3f5f-e259f0bb8a49/00606949350826.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3d/85/bf/3d85bf2d-de83-97b4-23cd-09761beefe7e/3663729217653_cover.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ad/8c/1c/ad8c1cf2-e8d9-8bdd-13cc-7532736484a3/20UM1IM11916.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/eb/70/99/eb7099b0-f0df-e269-bac2-24fbc6515316/3663729217530_cover.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9a/70/43/9a704362-976d-ec4b-0367-54d368cb0ef8/886445902204.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/aa/f1/5c/aaf15c2f-38f6-c621-0626-43ffe7ebd172/67003818254.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/da/8b/77/da8b7731-6f4f-eacf-5e74-8b23389eefa1/20UMGIM03371.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f3/81/ca/f381ca2b-0779-4102-2c64-8b2563eedb96/00888072355996.rgb.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/c0/85/bbc08589-803e-9792-f279-414c28624c07/093155170599_cover.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6a/c4/e6/6ac4e60d-5e29-da16-d312-d4cb486e68f3/794043205743.jpg/600x600bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/65/76/11/657611cd-7a13-b49c-8215-fca698446688/PA00104142_1_153931_jacket.jpg/600x600bb.jpg",
];
