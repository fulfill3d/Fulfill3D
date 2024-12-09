import {httpRequest} from "@/service/common/http-request";
import {RequestModel} from "@/models/common/request-model";
import {fulfill3dEndpoints} from "@/utils/endpoints";

export const sendFormRequest = async (requestModel: RequestModel) => {
    try {
        return await httpRequest(
            fulfill3dEndpoints.SendForm.Uri,
            fulfill3dEndpoints.SendForm.Method,
            requestModel
        );

    } catch (error) {
        throw new Error("Failed to send form request.");
    }
}
