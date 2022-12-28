import { JsonAlias, JsonProperty, ObjectMapper } from "jackson-js";

export class DataModel {
    @JsonProperty()
    @JsonAlias({
        values: ['commData1', 'militaryData1']
    })
    data1: string = '';

    @JsonProperty()
    @JsonAlias({
        values: ['commData2', 'militaryData2']
    })
    data2: string = '';
}

export const trans = (jsonData: string): DataModel => {
    const objectMapper = new ObjectMapper();
    const model = objectMapper.parse<DataModel>(jsonData, {
        mainCreator: () => [DataModel]
    });
    return model;
}