import {HttpMethod} from "@/service/common/http-request";

interface Endpoint {
    Uri: string;
    Method: HttpMethod;
}

export const fulfill3dEndpoints = {
    SendForm: {
        Uri: `${process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT}api/send-form-request`,
        Method: HttpMethod.POST,
    } as Endpoint,
    GetPosts: {
        Uri: `${process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT}api/get-published-posts`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetPostById: (Id: string): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT}api/post/${Id}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    GetProjects: {
        Uri: `${process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT}api/get-active-projects`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetProjectById: (Id: string): Endpoint => ({
        Uri: `${process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT}api/project/${Id}`,
        Method: HttpMethod.GET,
    }) as Endpoint,
    GetPerson: {
        Uri: `${process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT}api/get-person`,
        Method: HttpMethod.GET,
    } as Endpoint,
    GetCompany: {
        Uri: `${process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT}api/get-company`,
        Method: HttpMethod.GET,
    } as Endpoint
};
