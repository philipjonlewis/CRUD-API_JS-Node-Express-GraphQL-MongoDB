"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        phases: (parent, args, context, info) => {
            return [
                {
                    _id: 1,
                    phaseName: "First Phase",
                },
                {
                    _id: 2,
                    phaseName: "Second Phase",
                },
                {
                    _id: 3,
                    phaseName: "Third Phase",
                },
            ];
        },
        phase: (parent, args, context, info) => {
            return {
                _id: 1,
                phaseName: "First Phase",
            };
        },
    },
};
