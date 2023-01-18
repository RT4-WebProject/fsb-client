import { ReactWorldCountriesMap } from "react-world-countries-map"

const data =
[
    { country: "ve", value: 100 },
    { country: "sy", value: 100 },
    { country: "ye", value: 100 },
    { country: "af", value: 100 },
    { country: "ht", value: 100 },
    { country: "zw", value: 100 },
    { country: "so", value: 100 },
    { country: "ss", value: 100 },
    { country: "sd", value: 100 },
    { country: "kp", value: 100 },

      { country: "ua", value: 100 },
      { country: "ge", value: 100 }, 
      { country: "ye", value: 100 }, 
      { country: "cm", value: 100 }, 
      { country: "ru", value: 90 }, 
      { country: "by", value: 90 }, 
      { country: "kz", value: 90 }, 
      { country: "in", value: 90 }, 
      { country: "np", value: 90 }, 
      { country: "tw", value: 90 }, 
      { country: "tn", value: 75 }, 
      { country: "ml", value: 80 }, 
      { country: "mr", value: 80 }, 
      { country: "sy", value: 90 }, 
      { country: "ps", value: 85 }, 
      { country: "ml", value: 80 }, 
      { country: "ir", value: 80 }, 
      { country: "eh", value: 90 }, 
      { country: "et", value: 90 }, 
      { country: "ly", value: 75 }, 
      { country: "iq", value: 85 }, 
      { country: "ss", value: 85 }, 
      { country: "sd", value: 80 }, 
      { country: "td", value: 75 }, 
      { country: "ne", value: 75 }, 

      { country: "BI", value: "80"},
      { country: "CF", value: "80"},
      { country: "ER", value: "80"},
      { country: "LR", value: "80"},
      { country: "MW", value: "80"},
      { country: "MZ", value: "80"},
      { country: "SL", value: "80"},
      { country: "BF", value: "80"},
      { country: "EG", value: "70"},





















]

export function HeatMap() {
    return (

    <ReactWorldCountriesMap color="red" size="xl" data={data} />

    )
}
