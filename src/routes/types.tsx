import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const DocumentSchema = z.object({
  dateOccured: z.string({ required_error: "Date occured is required" }).min(1, {
    message: "Date occured is required",
  }),
});

export const DocumentValidator = zodResolver(DocumentSchema);
export type DocumentRequestDto = z.infer<typeof DocumentSchema>;
