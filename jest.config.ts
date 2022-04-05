import { pathsToModuleNameMapper } from 'ts-jest';
import { InitialOptionsTsJest } from 'ts-jest/dist/types';
import { compilerOptions } from './tsconfig.json';

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

export default config;
