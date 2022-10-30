import { ReactWorldCountriesMap } from "react-world-countries-map"

const data =
[
      { country: "ua", value: 100 }, // china
      { country: "ge", value: 100 }, // india
      { country: "ye", value: 100 }, // india
      { country: "cm", value: 100 }, // india
      { country: "ru", value: 90 }, // india
      { country: "by", value: 90 }, // india
      { country: "kz", value: 90 }, // india
      { country: "tw", value: 90 }, // india
      { country: "tn", value: 90 }, // india
      { country: "ml", value: 80 }, // india
      { country: "mr", value: 80 }, // india
      { country: "sy", value: 90 }, // india
      { country: "ps", value: 85 }, // india
      { country: "ml", value: 80 }, // india
      { country: "ir", value: 80 }, // india
      { country: "eh", value: 90 }, // india
      { country: "et", value: 90 }, // india
      { country: "ly", value: 70 }, // india
      { country: "dz", value: 70 }, // india
      { country: "iq", value: 85 }, // india
      { country: "ss", value: 85 }, // india
      { country: "sd", value: 80 }, // india
      { country: "td", value: 70 }, // india
      { country: "ne", value: 70 }, // india




















]

export function HeatMap() {
    return (
    <ReactWorldCountriesMap color="red" size="xl" data={data} />
    )
}
