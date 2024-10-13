import {Person} from "@/models/about/person";
import {personProfileJson} from "@/mock/about/data";

export const getPersonProfile = () => {
    const profile = Person.fromJson(personProfileJson);
    return { profile }
}
