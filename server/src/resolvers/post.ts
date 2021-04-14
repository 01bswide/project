import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  InputType,
  Resolver,
  Field,
} from "type-graphql";

@InputType()
class PostInput {
  @Field()
  title!: string;
  @Field()
  text!: string;
}

@Resolver(Post)
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number, @Ctx() { em }: MyContext): Promise<Post | null> {
    return em.findOne(Post, { id });
  }

  @Mutation(() => Post)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { em }: MyContext
  ): Promise<Post> {
    const post = em.create(Post, { ...input });
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Arg("text", () => String, { nullable: true }) text: string,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    const post = await em.findOne(Post, { id });
    if (!post) {
      return null;
    }
    if (title) {
      post.title = title;
    }
    if (text) {
      post.text = text;
    }
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    try {
      em.nativeDelete(Post, { id });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
