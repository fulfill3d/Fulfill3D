import {httpRequest} from "@/service/common/http-request";
import {fulfill3dEndpoints} from "@/utils/endpoints";
import {Person} from "@/models/about/person";

export const getPersonProfile = async () => {
    try {
        const response = await httpRequest(
            fulfill3dEndpoints.GetPerson.Uri,
            fulfill3dEndpoints.GetPerson.Method,
            null,
            undefined,
            undefined
        );
        return Person.fromJson(response);
    } catch (error) {
        throw new Error("Failed to fetch projects.");
    }
}
