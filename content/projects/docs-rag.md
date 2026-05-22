---
title: Documentation RAG with LLM-as-Judge Evaluation
description: A citation-grounded RAG pipeline over 2,140 chunks of API/MCP documentation, tuned via an LLM-as-Judge evaluation harness that lifted retrieval quality from 3.50 to 4.00 / 5.
tech: ['Python', 'Chroma', 'fastembed', 'bge-small-en-v1.5', 'LangChain']
github: https://github.com/nishithabottu/docs-rag
---

# Documentation RAG with LLM-as-Judge Evaluation

A RAG pipeline over **2,140 chunks of API and MCP TypeScript SDK documentation**, designed to answer developer questions about the docs without hallucinating. The interesting part isn't the retrieval itself — it's the evaluation harness that proves the retrieval actually works.

## The problem

Most RAG systems ship because they "look right" in a demo, then fail on edge cases that no one tested. I wanted to build one where every change to the pipeline produced a real, scored answer about whether the change was an improvement.

## What I built

**Retrieval choices, justified.**

- Chose **fastembed (bge-small-en-v1.5)** over OpenAI embeddings — significantly cheaper per chunk, with comparable retrieval quality on this corpus.
- Chose **Chroma** over FAISS because the corpus had metadata I needed to filter on (SDK version, doc section). Chroma's metadata filtering was the deciding factor.

**Citation grounding.**

- Generation is constrained so the model can only reference retrieved chunk IDs. It cannot cite something it didn't see.
- This turns "hallucination" from a judgment call into an automated check.

**LLM-as-Judge evaluation harness.**

- A **10-question golden set** covering single-hop, multi-hop, and out-of-scope queries.
- Scoring rubric: **groundedness (0–5) + a hallucination penalty**, with the judge prompted to cite specific chunks when scoring.
- A/B tested **TOP_K = 5 vs 8**. Moving to 8 lifted the mean score from **3.50 to 4.00 out of 5** — a real, repeatable improvement.

## What it taught me

Every LLM pipeline change should produce a number. "Feels better" is not a number. Once you have one, you can tune, you can ship, and you can roll back.

## Links

- [GitHub](https://github.com/nishithabottu/docs-rag)

[← Back to home](/)
