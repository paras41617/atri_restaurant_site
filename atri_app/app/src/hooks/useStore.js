import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Div1": {
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Div7": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "Div9": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Div10": {
      "callbacks": {}
    },
    "Div11": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Div14": {
      "callbacks": {}
    },
    "Div16": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Div17": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Div15": {
      "callbacks": {}
    },
    "Div19": {
      "callbacks": {}
    },
    "Div21": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Div23": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "Div22": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Div33": {
      "callbacks": {}
    },
    "Div31": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Div43": {
      "callbacks": {}
    },
    "Div39": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Div41": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Div42": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Div48": {
      "callbacks": {}
    },
    "Div44": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Div45": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Div53": {
      "callbacks": {}
    },
    "Div49": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Div50": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Div51": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Div58": {
      "callbacks": {}
    },
    "Div54": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Div55": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Div56": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Div57": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Div34": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Div70": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Div68": {
      "callbacks": {}
    },
    "Div69": {
      "callbacks": {}
    },
    "Div65": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Div66": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Div67": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Div91": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Div92": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Div87": {
      "callbacks": {}
    },
    "Div71": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Div73": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Div96": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Div100": {
      "callbacks": {}
    },
    "Div97": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Div98": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Div99": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Div104": {
      "callbacks": {}
    },
    "Div101": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Div102": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Div103": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Div108": {
      "callbacks": {}
    },
    "Div105": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Div106": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Div107": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Div95": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Div125": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Div121": {
      "callbacks": {}
    },
    "Div109": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Div110": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Div111": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Div122": {
      "callbacks": {}
    },
    "Div112": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Div113": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Div114": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Div123": {
      "callbacks": {}
    },
    "Div115": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Div116": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {}
    },
    "Div117": {
      "callbacks": {}
    },
    "Flex81": {
      "callbacks": {}
    },
    "Div124": {
      "callbacks": {}
    },
    "Div118": {
      "callbacks": {}
    },
    "Flex82": {
      "callbacks": {}
    },
    "Div119": {
      "callbacks": {}
    },
    "Flex83": {
      "callbacks": {}
    },
    "Div120": {
      "callbacks": {}
    },
    "Flex84": {
      "callbacks": {}
    },
    "Div131": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Div129": {
      "callbacks": {}
    },
    "Div130": {
      "callbacks": {}
    },
    "Div126": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Div127": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Div128": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Div204": {
      "callbacks": {}
    },
    "Div201": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Div202": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Div197": {
      "callbacks": {}
    },
    "Div181": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Div182": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Div183": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Div206": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Div210": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Div211": {
      "callbacks": {}
    },
    "Div212": {
      "callbacks": {}
    },
    "Div213": {
      "callbacks": {}
    },
    "Div203": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Div205": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Div215": {
      "callbacks": {}
    },
    "Div216": {
      "callbacks": {}
    },
    "Flex152": {
      "callbacks": {}
    },
    "Div220": {
      "callbacks": {}
    },
    "Div228": {
      "callbacks": {}
    },
    "Div224": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Div225": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Div226": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Div229": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Div221": {
      "callbacks": {}
    },
    "Div222": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Div264": {
      "callbacks": {}
    },
    "Div261": {
      "callbacks": {}
    },
    "Flex185": {
      "callbacks": {}
    },
    "Div262": {
      "callbacks": {}
    },
    "Flex186": {
      "callbacks": {}
    },
    "Div263": {
      "callbacks": {}
    },
    "Flex187": {
      "callbacks": {}
    },
    "Div269": {
      "callbacks": {}
    },
    "Div266": {
      "callbacks": {}
    },
    "Flex189": {
      "callbacks": {}
    },
    "Div267": {
      "callbacks": {}
    },
    "Flex190": {
      "callbacks": {}
    },
    "Div268": {
      "callbacks": {}
    },
    "Flex191": {
      "callbacks": {}
    },
    "Div223": {
      "callbacks": {}
    },
    "Flex153": {
      "callbacks": {}
    },
    "Div254": {
      "callbacks": {}
    },
    "Div251": {
      "callbacks": {}
    },
    "Flex177": {
      "callbacks": {}
    },
    "Div252": {
      "callbacks": {}
    },
    "Flex178": {
      "callbacks": {}
    },
    "Div253": {
      "callbacks": {}
    },
    "Flex179": {
      "callbacks": {}
    },
    "Div259": {
      "callbacks": {}
    },
    "Div256": {
      "callbacks": {}
    },
    "Flex181": {
      "callbacks": {}
    },
    "Div257": {
      "callbacks": {}
    },
    "Flex182": {
      "callbacks": {}
    },
    "Div258": {
      "callbacks": {}
    },
    "Flex183": {
      "callbacks": {}
    },
    "Div217": {
      "callbacks": {}
    },
    "Flex151": {
      "callbacks": {}
    },
    "Div218": {
      "callbacks": {}
    },
    "Div219": {
      "callbacks": {}
    },
    "Div281": {
      "callbacks": {}
    },
    "Flex199": {
      "callbacks": {}
    },
    "Div279": {
      "callbacks": {}
    },
    "Div276": {
      "callbacks": {}
    },
    "Flex196": {
      "callbacks": {}
    },
    "Div277": {
      "callbacks": {}
    },
    "Flex197": {
      "callbacks": {}
    },
    "Div282": {
      "callbacks": {}
    },
    "Flex200": {
      "callbacks": {}
    },
    "Div285": {
      "callbacks": {}
    },
    "Div286": {
      "callbacks": {}
    },
    "Div296": {
      "callbacks": {}
    },
    "Flex204": {
      "callbacks": {}
    },
    "Div294": {
      "callbacks": {}
    },
    "Div295": {
      "callbacks": {}
    },
    "Div299": {
      "callbacks": {}
    },
    "Flex205": {
      "callbacks": {}
    },
    "Div297": {
      "callbacks": {}
    },
    "Div298": {
      "callbacks": {}
    },
    "Div280": {
      "callbacks": {}
    },
    "Flex206": {
      "callbacks": {}
    },
    "Div334": {
      "callbacks": {}
    },
    "Flex228": {
      "callbacks": {}
    },
    "Div365": {
      "callbacks": {}
    },
    "Div363": {
      "callbacks": {}
    },
    "Flex229": {
      "callbacks": {}
    },
    "Div361": {
      "callbacks": {}
    },
    "Div364": {
      "callbacks": {}
    },
    "Flex230": {
      "callbacks": {}
    },
    "Div362": {
      "callbacks": {}
    },
    "Div372": {
      "callbacks": {}
    },
    "Div370": {
      "callbacks": {}
    },
    "Flex231": {
      "callbacks": {}
    },
    "Div366": {
      "callbacks": {}
    },
    "Div367": {
      "callbacks": {}
    },
    "Div371": {
      "callbacks": {}
    },
    "Flex232": {
      "callbacks": {}
    },
    "Div368": {
      "callbacks": {}
    },
    "Div369": {
      "callbacks": {}
    },
    "Div379": {
      "callbacks": {}
    },
    "Div377": {
      "callbacks": {}
    },
    "Flex233": {
      "callbacks": {}
    },
    "Div373": {
      "callbacks": {}
    },
    "Div374": {
      "callbacks": {}
    },
    "Div378": {
      "callbacks": {}
    },
    "Flex234": {
      "callbacks": {}
    },
    "Div375": {
      "callbacks": {}
    },
    "Div376": {
      "callbacks": {}
    },
    "Div396": {
      "callbacks": {}
    },
    "Div394": {
      "callbacks": {}
    },
    "Flex239": {
      "callbacks": {}
    },
    "Div390": {
      "callbacks": {}
    },
    "Div391": {
      "callbacks": {}
    },
    "Div395": {
      "callbacks": {}
    },
    "Flex240": {
      "callbacks": {}
    },
    "Div392": {
      "callbacks": {}
    },
    "Div393": {
      "callbacks": {}
    },
    "Div450": {
      "callbacks": {}
    },
    "Flex272": {
      "callbacks": {}
    },
    "Div426": {
      "callbacks": {}
    },
    "Div424": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "Div420": {
      "callbacks": {}
    },
    "Div421": {
      "callbacks": {}
    },
    "Div425": {
      "callbacks": {}
    },
    "Flex260": {
      "callbacks": {}
    },
    "Div422": {
      "callbacks": {}
    },
    "Div417": {
      "callbacks": {}
    },
    "Flex257": {
      "callbacks": {}
    },
    "Div409": {
      "callbacks": {}
    },
    "Div397": {
      "callbacks": {}
    },
    "Flex241": {
      "callbacks": {}
    },
    "Div410": {
      "callbacks": {}
    },
    "Div400": {
      "callbacks": {}
    },
    "Flex244": {
      "callbacks": {}
    },
    "Div418": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Div411": {
      "callbacks": {}
    },
    "Div403": {
      "callbacks": {}
    },
    "Flex247": {
      "callbacks": {}
    },
    "Div412": {
      "callbacks": {}
    },
    "Div406": {
      "callbacks": {}
    },
    "Flex250": {
      "callbacks": {}
    },
    "Div423": {
      "callbacks": {}
    },
    "Div419": {
      "callbacks": {}
    },
    "Div416": {
      "callbacks": {}
    },
    "Flex256": {
      "callbacks": {}
    },
    "Div435": {
      "callbacks": {}
    },
    "Div434": {
      "callbacks": {}
    },
    "Div433": {
      "callbacks": {}
    },
    "Flex265": {
      "callbacks": {}
    },
    "Div436": {
      "callbacks": {}
    },
    "Flex273": {
      "callbacks": {}
    },
    "Div451": {
      "callbacks": {}
    },
    "Flex293": {
      "callbacks": {}
    },
    "Div487": {
      "callbacks": {}
    },
    "Flex294": {
      "callbacks": {}
    },
    "Div489": {
      "callbacks": {}
    },
    "Div491": {
      "callbacks": {}
    },
    "Div498": {
      "callbacks": {}
    },
    "Div499": {
      "callbacks": {}
    },
    "Div500": {
      "callbacks": {}
    },
    "Div501": {
      "callbacks": {}
    },
    "Div502": {
      "callbacks": {}
    },
    "Div503": {
      "callbacks": {}
    },
    "Div521": {
      "callbacks": {}
    },
    "Flex297": {
      "callbacks": {}
    },
    "Div513": {
      "callbacks": {}
    },
    "Div514": {
      "callbacks": {}
    },
    "Div515": {
      "callbacks": {}
    },
    "Div516": {
      "callbacks": {}
    },
    "Div517": {
      "callbacks": {}
    },
    "Div518": {
      "callbacks": {}
    },
    "Div519": {
      "callbacks": {}
    },
    "Div520": {
      "callbacks": {}
    },
    "Div452": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Div484": {
      "callbacks": {}
    },
    "Div482": {
      "callbacks": {}
    },
    "Flex290": {
      "callbacks": {}
    },
    "Div478": {
      "callbacks": {}
    },
    "Div474": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Div479": {
      "callbacks": {}
    },
    "Div475": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Div483": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Div480": {
      "callbacks": {}
    },
    "Div476": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Div481": {
      "callbacks": {}
    },
    "Div477": {
      "callbacks": {}
    },
    "Flex289": {
      "callbacks": {}
    },
    "Div485": {
      "callbacks": {}
    },
    "Flex292": {
      "callbacks": {}
    },
    "Div462": {
      "callbacks": {}
    },
    "Div461": {
      "callbacks": {}
    },
    "Div457": {
      "callbacks": {}
    },
    "Flex275": {
      "callbacks": {}
    },
    "Div459": {
      "callbacks": {}
    },
    "Flex277": {
      "callbacks": {}
    },
    "Div460": {
      "callbacks": {}
    },
    "Flex278": {
      "callbacks": {}
    },
    "Div455": {
      "callbacks": {}
    },
    "Flex274": {
      "callbacks": {}
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/top_logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button5": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button6": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/burger.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/doordash.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/postmates.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rappi.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/grubhub.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/dishes.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/drink.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/desserts.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/breakfast.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button8": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button9": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about_us.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button12": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button13": {
      "custom": {
        "text": "Join our team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button14": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button15": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classical_burger.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/chocolate_milkshake.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fries.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pancakes.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/regular_soda.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/egg_toast.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "Egg toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/chicken_burger.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ice_cream.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/third_main.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button16": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button17": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button22": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button23": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/start_5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/matt_cannon.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_5.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/phone.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "custom": {
        "text": "losangeles@restaurentex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/email.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/location.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input18": {
      "custom": {
        "value": "",
        "placeholder": "Do you have any note for us ?"
      },
      "callbacks": {}
    },
    "TextBox178": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input19": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angeles"
      },
      "callbacks": {}
    },
    "Input20": {
      "custom": {
        "value": "",
        "placeholder": "(123) 456 - 789"
      },
      "callbacks": {}
    },
    "TextBox180": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input21": {
      "custom": {
        "value": "",
        "placeholder": "Ex. 2:00PM"
      },
      "callbacks": {}
    },
    "Input22": {
      "custom": {
        "value": "",
        "placeholder": "Day and Month"
      },
      "callbacks": {}
    },
    "Input25": {
      "custom": {
        "value": "",
        "placeholder": "John Carter"
      },
      "callbacks": {}
    },
    "Input26": {
      "custom": {
        "value": "",
        "placeholder": "example@email.com"
      },
      "callbacks": {}
    },
    "TextBox184": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox185": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button29": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox197": {
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox198": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image60": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_5.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image61": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image62": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image64": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox212": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox214": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox221": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox223": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox224": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox225": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox235": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox236": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox238": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox239": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox240": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox241": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox242": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_5.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image77": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image78": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article_3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox211": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image70": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/start_5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox209": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image69": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/top_logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
