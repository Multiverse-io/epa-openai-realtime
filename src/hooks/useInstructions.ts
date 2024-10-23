import { baseInstructions } from "../utils/base_instructions";
import { KSB5instructions } from "../utils/KSB5";
import { KSB6instructions } from "../utils/KSB6";

const getInstructions = (instructionType: string) => {
    return [baseInstructions, instructions[instructionType]].join('')
}

const instructions: Record<string, string> = {
    KSB5 : KSB5instructions,
    KSB6 : KSB6instructions,
}

// Hook definition
export const useInstructions = (instructionType: string) => {
    const instructions = getInstructions(instructionType);

    return { instructions };
}