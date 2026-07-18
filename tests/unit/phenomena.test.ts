import { describe, expect, it } from "vitest";
import { PHENOMENA } from "@/data/phenomena";
describe("physics phenomena collection",()=>{
 it("contains 25 unique complete topics",()=>{expect(PHENOMENA).toHaveLength(25);expect(new Set(PHENOMENA.map(x=>x.slug)).size).toBe(25)});
 it("has sources, five quiz questions and safe experiments",()=>{for(const p of PHENOMENA){expect(p.sources.length).toBeGreaterThanOrEqual(2);expect(p.quiz).toHaveLength(5);expect(p.experiment.safety.length).toBeGreaterThan(40)}});
});
