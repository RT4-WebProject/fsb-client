import { ReactWorldCountriesMap } from "react-world-countries-map"

const data =
[
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
]

export function HeatMap() {
    return (
    <ReactWorldCountriesMap color="red" size="xl" data={data} />
    )
}
