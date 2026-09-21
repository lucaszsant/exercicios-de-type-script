import{describe,expect, it} from "vitest";
import{somar} from "./exercicio";

describe("teste da função da soma",()=>
{
 it("Deve somar dois números corretamente", ()=>{
    expect(somar(10,15)).toBe(25);
 });
});