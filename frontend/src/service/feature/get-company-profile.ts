import {httpRequest} from "@/service/common/http-request";
import {fulfill3dEndpoints} from "@/utils/endpoints";
import {Company} from "@/models/about/company";

export const getCompanyProfile = async () => {
    try {
        const response = await httpRequest(
            fulfill3dEndpoints.GetCompany.Uri,
            fulfill3dEndpoints.GetCompany.Method,
            null,
            undefined,
            undefined
        );
        return Company.fromJson(response);
    } catch (error) {
        throw new Error("Failed to fetch company profile.");
    }
}
