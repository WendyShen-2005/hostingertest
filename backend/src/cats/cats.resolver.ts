import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class CatsResolver {
    @Query(() => String)
    sayHello():string {
        return 'Hello world';
    }
}