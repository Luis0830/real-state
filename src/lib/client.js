import { SanityClient } from "@sanity/client";

const Client = SanityClient({
    projectId: "m4z2cfaq",
    dataset: "production",
    apiVersion: "2023-02-04",
    useCdn: true,
})


export default Client;