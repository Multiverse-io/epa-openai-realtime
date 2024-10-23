import { baseInstructions } from "../utils/base_instructions";
import { K5instructions } from "../utils/K5";
import { B6instructions } from "../utils/B6";

const getInstructions = (instructionType: string) => {
    return [baseInstructions, instructions[instructionType]].join('')
}

const instructions: Record<string, string> = {
    K5 : K5instructions,
    B6 : B6instructions,
}

// Hook definition
export const useInstructions = (instructionType: string) => {
    const instructions = getInstructions(instructionType);

    return { instructions };
}