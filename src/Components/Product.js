import React from 'react'
import Productitem from './Productitem';

export default function Product(props) {
  const  articles=[
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "title": "Resistors",
        "description": "A resistor is an electrical component that limits or regulates the flow of electrical current in an electronic circuit.",
        "url": "https://biztoc.com/x/229a1ee053eed5fc",
        "urlToImage": "https://static4.arrow.com/-/media/arrow/images/miscellaneous/0/0916-resistor-color-code-main.jpg?mw=734&hash=C01919193FEF22D4CD7A974A4141C1D4",
        "publishedAt": "2023-04-30T12:24:05Z",
        "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "title": "Capacitors",
        "description": "device for storing electrical energy, consisting of two conductors in close proximity and insulated from each other.",
        "url": "https://biztoc.com/x/229a1ee053eed5fc",
        "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Capacitors_%287189597135%29.jpg",
        "publishedAt": "2023-04-30T12:24:05Z",
        "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Marketscreener.com"
        },
        "title": "Transistors",
        "description": "A transistor is a miniature semiconductor that regulates or controls current or voltage flow in addition amplifying and generating.",
        "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
        "urlToImage": "https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/2019/10/electronicdesign_29132_transistor_646291934.png?auto=format,compress&fit=crop&h=556&w=1000&q=45",
        "publishedAt": "2023-04-30T12:18:03Z",
        "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "title": "Inductors",
        "description": "An inductor is a passive electronic component that temporarily stores energy in a magnetic field when electric current flows through the inductor's coil.",
        "url": "https://biztoc.com/x/229a1ee053eed5fc",
        "urlToImage": "https://www.tutorialspoint.com/basic_electronics/images/inductor.jpg",
        "publishedAt": "2023-04-30T12:24:05Z",
        "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "title": "Varistors",
        "description": "Varistors are used to protect a circuit from high voltage surges. When a high voltage surge is applied to a circuit.",
        "url": "https://biztoc.com/x/229a1ee053eed5fc",
        "urlToImage": "https://www.electronicshub.org/wp-content/uploads/2014/12/Variastor.jpg",
        "publishedAt": "2023-04-30T12:24:05Z",
        "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "title": "LED",
        "description": "A Light Emitting Diode (LED) is a semiconductor device, which can emit light when an electric current passes through it.",
        "url": "https://biztoc.com/x/229a1ee053eed5fc",
        "urlToImage": "https://www.electronicshub.org/wp-content/uploads/2021/05/Light-Emitting-Diode-Basics.jpg",
        "publishedAt": "2023-04-30T12:24:05Z","content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Marketscreener.com"
          },
          "title": "Thermistors",
          "description": "Thermistors are a type of semiconductor that react like a resistor sensitive to temperature.",
          "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
          "urlToImage": "https://www.electricaltechnology.org/wp-content/uploads/2021/11/What-is-a-Thermistor-Types-of-Thermistors-Construction-and-Applications-768x408.jpg",
          "publishedAt": "2023-04-30T12:18:03Z",
          "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "title": "Crystals",
          "description": "crystals are used for frequency control. Crystals are usually cut from quartz and resonate at a set frequency when powered.",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://startingelectronics.org/beginners/components/crystal/crystal.jpg",
          "publishedAt": "2023-04-30T12:24:05Z",
          "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "title": "Wire Harness",
          "description": "A wire harness is a system of insulated conducting wires bound together with insulating materials.",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://5.imimg.com/data5/LR/UA/QG/SELLER-4193037/electric-cable-harness-500x500.jpg",
          "publishedAt": "2023-04-30T12:24:05Z",
          "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "title": "Voltage regulator",
          "description": "A voltage regulator is a circuit that creates and maintains a fixed output voltage.",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://circuitdigest.com/sites/default/files/field/image/Voltage-Regulators.jpg",
          "publishedAt": "2023-04-30T12:24:05Z",
          "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Marketscreener.com"
          },
          "title": "Ferrite Bead",
          "description": "A ferrite bead is a passive device that filters high frequency noise energy over a broad frequency range.",
          "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
          "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/7/73/Cable_end.JPG",
          "publishedAt": "2023-04-30T12:18:03Z",
          "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },"title": "Connectors",
          "description": "Connectors are parts or devices used for electrically connecting or disconnecting circuits etc.",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://img.fruugo.com/product/3/01/138449013_max.jpg",
          "publishedAt": "2023-04-30T12:24:05Z",
          "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "title": "Fuses",
          "description": "fuse, in electrical engineering, a safety device that protects electrical circuits from the effects of excessive currents.",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/b/be/Tektronixoscilloscope442backfuse-ccbysawikipedia.jpg",
          "publishedAt": "2023-04-30T12:24:05Z",
          "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "title": "Mic/Speaker",
          "description": "Microphones convert sound signals into electrical signals. Speakers do the exact opposite: they convert electrical signals into audible (sound) signals.",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://cdn.shakedeal.com/images/detailed/789/SDPCS0045300_2806-9s.png",
          "publishedAt": "2023-04-30T12:24:05Z",
          "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Marketscreener.com"
          },
          "title": "Battery",
          "description": "A battery is a device that stores chemical energy and converts it to electrical energy.",
          "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
          "urlToImage": "https://components101.com/sites/default/files/components/Different-Types-of-Batteries.jpg",
          "publishedAt": "2023-04-30T12:18:03Z",
          "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "title": "Buzzer",
          "description": "A buzzer or beeper is an audio signaling device, which may be mechanical, electromechanical, or piezoelectric (piezo for short)",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://5.imimg.com/data5/SELLER/Default/2020/11/QJ/BZ/MK/37611021/buzzer-500x500.jpg",
          "publishedAt": "2023-04-30T12:24:05Z",
          "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "title": "Cables/Wires",
          "description": "a conductor or group of conductors for transmitting electric power or telecommunication signals from one place to another.",
          "url": "https://biztoc.com/x/229a1ee053eed5fc",
          "urlToImage": "https://w7.pngwing.com/pngs/781/68/png-transparent-electrical-cable-electrical-wires-cable-wiring-diagram-electronics-wire-and-cable-miscellaneous-electronics-electrical-wires-cable-thumbnail.png",
          "publishedAt": "2023-04-30T12:24:05Z","content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Solder Paste",
            "description": "Solder paste works as an adhesive, connecting surface components to pads on the board. It also provides electrical and thermal connection.",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://rukminim1.flixcart.com/image/416/416/xif0q/soldering-iron/2/f/x/1-mechanic-xg50-soldering-paste-for-smd-rework-electronics-original-imagk3fkzthkpcgg.jpeg?q=70",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "PCB",
            "description": "A printed circuit board, or PC board, or PCB, is a non-conductive material with conductive lines printed or etched.",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://circuitdigest.com/sites/default/files/projectimage_tut/Basics-of-PCB.jpg",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Mosfet",
            "description": "MOSFET stands for metal-oxide-semiconductor field-effect transistor.",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.tutorialspoint.com/basic_electronics/images/mosfet.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Diodes",
            "description": "A diode is a semiconductor device that essentially acts as a one-way switch for current.",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.gadgetronicx.com/wp-content/uploads/2020/02/diode-tutorial-1024x649.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "title": "Antenaa",
            "description": "An antenna is a metallic structure that captures and/or transmits radio electromagnetic waves.",
            "url": "https://www.marketscreener.com/quote/stock/BMW-AG-56358353/news/Study-Manufacturers-give-more-discounts-on-new-cars-43697383/?utm_medium=RSS&utm_content=20230430",
            "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/7/76/Antenna.jpg",
            "publishedAt": "2023-04-30T12:18:03Z",
            "content": "DUISBURG/FRANKFURT (dpa-AFX) - New car buyers and renters can again expect higher discounts on the list prices of cars. According to the regular market study by the Duisburg-based Center Automotive R… [+1040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "LCD/TFT",
            "description": "(TFT LCD) is a variant of a liquid-crystal display that uses thin-film-transistor technology to improve image qualities such as addressability and contrast.",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://www.haoyuelectronics.com/Attachment/2.4-LCD-Module/2.4-LCD-Module-1.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "title": "Switches",
            "description": "A switch responds to an external force to mechanically change an electric signal.",
            "url": "https://biztoc.com/x/229a1ee053eed5fc",
            "urlToImage": "https://5.imimg.com/data5/MH/WD/DS/SELLER-1225448/electronic-switches-1000x1000.jpg",
            "publishedAt": "2023-04-30T12:24:05Z",
            "content": "These habits commonly trip up entrepreneurs, but there's a tool that can help with all three.Opinions expressed by Entrepreneur contributors are their own.Russian composer Igor Stravinsky reportedly … [+310 chars]"
        }
    ]
    const display=articles;
  return (
    <div className='container my-3'>
        <div className='row'>
            {
                display.map((i)=>{
                    return <div className='col-sm my-3'>
                        <Productitem title={i.title} description={i.description.slice(0,120)} imageUrl={i.urlToImage} url={i.url} mag={props.luffy} />
                    </div>
                })
            }
        </div>
    </div>
  )
}
