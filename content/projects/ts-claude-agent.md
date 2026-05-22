---
title: Codebase-Navigation Agent (TypeScript CLI)
description: A typed agent loop where an LLM navigates codebases through three Zod-validated tools. Scored 5/5 on the evaluation set.
tech: ['TypeScript', 'Node.js', 'Zod', 'Streaming']
github: https://github.com/nishithabottu/ts-claude-agent
---

# Codebase-Navigation Agent (TypeScript CLI)

A TypeScript CLI in which an LLM explores a codebase to answer questions, using **three typed tools** with **Zod schemas** that double as the model's JSON Schema *and* the runtime validator.

## The problem

When you give an LLM a tool, you typically maintain two things: the JSON Schema you hand to the model, and the validation code that runs when the model calls the tool. They drift. When they drift, you get silent bugs — the model calls a tool with arguments that match the schema you gave it but blow up your runtime.

## What I built

**One source of truth for tool schemas.**

Each tool's arguments are defined as a **Zod schema**, which I convert to JSON Schema for the model and use directly for runtime validation. If I tighten the type, both ends tighten together. No drift.

**Three tools, sandboxed.**

`list_files`, `read_file`, `grep` — enough to navigate a real codebase. Every path argument is sandboxed to the project root, so the model can't escape.

**Streaming agent loop with a turn cap.**

Tokens stream as they arrive, so the CLI feels alive. The loop is capped at **8 turns** to prevent runaway tool-spam on ambiguous questions.

## Results

Scored **5/5** on a hand-built evaluation set with a **mean of 3 turns and 2.6 tool calls per question** — meaning the agent typically resolves a question in two or three hops, not by panicking and calling every tool.

## What it taught me

A typed tool layer is the unsexy thing that makes agents actually trustworthy. Zod-as-JSON-Schema-and-validator is one of those small ergonomic wins that compounds across a real codebase.

## Links

- [GitHub](https://github.com/nishithabottu/ts-claude-agent)

[← Back to home](/)
