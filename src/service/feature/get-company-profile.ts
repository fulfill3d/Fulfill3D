import {companyProfileJson} from "@/mock/about/data";
import {Company} from "@/models/about/company";

export const getCompanyProfile = () => {
    const profile = Company.fromJson(companyProfileJson);
    return { profile }
}
