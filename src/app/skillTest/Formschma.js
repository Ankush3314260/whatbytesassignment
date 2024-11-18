import * as z from "zod";

const formSchema = z.object({
  rank: z.number().min(1, "Rank is required and must be a number"),
  percentile: z
    .number()
    .min(1, "Percentile must be at least 1")
    .max(100, "Percentile must be at most 100"),
  score: z
    .number()
    .min(1, "Score must be at least 1")
    .max(15, "Score must be at most 15"),
});

export default formSchema;