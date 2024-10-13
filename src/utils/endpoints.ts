import {HttpMethod} from "@/service/common/http-request";


interface Endpoint {
    Uri: string;
    Method: HttpMethod;
}

export const fulfill3dEndpoints = {
    SendForm: {
        Uri: `${process.env.NEXT_PUBLIC_SEND_FORM_REQUEST_ENDPOINT}`,
        Method: HttpMethod.POST,
    } as Endpoint
};
