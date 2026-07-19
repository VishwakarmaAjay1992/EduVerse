import { BookOpen, Globe, Lightbulb, Pin, Sparkles } from "lucide-react";
import { AccuracyPrecision } from "@/components/figures/accuracy-precision";
import { AngleTypes } from "@/components/figures/angle-types";
import { ConicSection } from "@/components/figures/conic-section";
import { FractionBar } from "@/components/figures/fraction-bar";
import { GeoPrimitives } from "@/components/figures/geo-primitives";
import { MultiplicationArray } from "@/components/figures/multiplication-array";
import { NumberLine } from "@/components/figures/number-line";
import { ParallelTransversal } from "@/components/figures/parallel-transversal";
import { PlaceValueChart } from "@/components/figures/place-value-chart";
import { DerivedFlow } from "@/components/figures/derived-flow";
import { Parallax } from "@/components/figures/parallax";
import { RightTriangle } from "@/components/figures/right-triangle";
import { ScalarVector } from "@/components/figures/scalar-vector";
import { AngleExplorer } from "@/components/interactive/angle-explorer";
import { UnitCircleExplorer } from "@/components/interactive/unit-circle-explorer";
import { TrigGraphExplorer } from "@/components/interactive/trig-graph-explorer";
import { ClassifyActivity } from "@/components/interactive/classify-activity";
import { GradedQuiz } from "@/components/interactive/graded-quiz";
import { InstrumentActivity } from "@/components/interactive/instrument-activity";
import { LessonCompletion } from "@/components/interactive/lesson-completion";
import { PracticeQuestions } from "@/components/interactive/practice-questions";
import { MotionExplorer } from "@/components/interactive/motion-explorer";
import { MotionGraphExplorer } from "@/components/interactive/motion-graph-explorer";
import { ForceExplorer } from "@/components/interactive/force-explorer";
import { PressureExplorer } from "@/components/interactive/pressure-explorer";
import { DimensionalAnalysisExplorer } from "@/components/interactive/dimensional-analysis-explorer";
import { MeasurementUncertaintyExplorer } from "@/components/interactive/measurement-uncertainty-explorer";
import { IntegerNumberLineExplorer } from "@/components/interactive/integer-number-line-explorer";
import { IntegerRulesExplorer } from "@/components/interactive/integer-rules-explorer";
import { RationalNumberExplorer } from "@/components/interactive/rational-number-explorer";
import { AlgebraExpressionExplorer } from "@/components/interactive/algebra-expression-explorer";
import { SimplifyingExpressionsExplorer } from "@/components/interactive/simplifying-expressions-explorer";
import { EquationBalanceExplorer } from "@/components/interactive/equation-balance-explorer";
import { FactorPrimeExplorer } from "@/components/interactive/factor-prime-explorer";
import { CoordinateDataExplorer } from "@/components/interactive/coordinate-data-explorer";
import { EnergyExplorer } from "@/components/interactive/energy-explorer";
import { DensityExplorer } from "@/components/interactive/density-explorer";
import { KinematicsExplorer } from "@/components/interactive/kinematics-explorer";
import { RootsExplorer } from "@/components/interactive/roots-explorer";
import { StandardFormExplorer } from "@/components/interactive/standard-form-explorer";
import { UnitConverterExplorer } from "@/components/interactive/unit-converter-explorer";
import { PerimeterAreaExplorer } from "@/components/interactive/perimeter-area-explorer";
import { VolumeSurfaceExplorer } from "@/components/interactive/volume-surface-explorer";
import { LinearEquationSolverExplorer } from "@/components/interactive/linear-equation-solver-explorer";
import { WordProblemTranslatorExplorer } from "@/components/interactive/word-problem-translator-explorer";
import { InequalityExplorer } from "@/components/interactive/inequality-explorer";
import { SimultaneousEquationsExplorer } from "@/components/interactive/simultaneous-equations-explorer";
import { PolynomialMultiplyExplorer } from "@/components/interactive/polynomial-multiply-explorer";
import { PolynomialDivisionExplorer } from "@/components/interactive/polynomial-division-explorer";
import { FactoringExplorer } from "@/components/interactive/factoring-explorer";
import { RationalExpressionExplorer } from "@/components/interactive/rational-expression-explorer";
import { Flashcards } from "@/components/interactive/flashcards";
import { Quiz } from "@/components/interactive/quiz";
import { BlockMath, richText } from "@/components/math";
import { LessonIcon } from "@/components/lesson-icon";
import { Card, CardContent } from "@/components/ui/card";
import type { Figure, LessonSection } from "@/lib/lesson-content-types";

/** Render text, turning inline $...$ spans into KaTeX math. */
const rich = richText;

function FigureView({ figure }: { figure: Figure }) {
  switch (figure.type) {
    case "placeValue":
      return <PlaceValueChart number={figure.number} />;
    case "array":
      return <MultiplicationArray rows={figure.rows} cols={figure.cols} />;
    case "fractionBar":
      return <FractionBar parts={figure.parts} shaded={figure.shaded} />;
    case "rightTriangle":
      return (
        <RightTriangle
          opposite={figure.opposite}
          adjacent={figure.adjacent}
          hypotenuse={figure.hypotenuse}
          angle={figure.angle}
        />
      );
    case "numberLine":
      return (
        <NumberLine
          min={figure.min}
          max={figure.max}
          step={figure.step}
          highlight={figure.highlight}
        />
      );
    case "conic":
      return <ConicSection kind={figure.kind} />;
    case "geoPrimitives":
      return <GeoPrimitives />;
    case "angleTypes":
      return <AngleTypes />;
    case "parallelTransversal":
      return <ParallelTransversal relationship={figure.relationship} />;
    case "angleExplorer":
      return <AngleExplorer />;
    case "derivedFlow":
      return <DerivedFlow />;
    case "scalarVector":
      return <ScalarVector />;
    case "accuracyPrecision":
      return <AccuracyPrecision />;
    case "parallax":
      return <Parallax />;
  }
}

function SectionBlock({ section, lessonId }: { section: LessonSection; lessonId: string }) {
  switch (section.kind) {
    case "overview":
      return (
        <div className="space-y-4">
          {section.paragraphs.map((p, i) => (
            <p key={i} className="leading-7 text-muted-foreground">
              {rich(p)}
            </p>
          ))}
        </div>
      );
    case "theory":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{rich(section.heading)}</h3>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="leading-7 text-muted-foreground">
              {rich(p)}
            </p>
          ))}
          {section.list && (
            <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
              {section.list.map((item, i) => (
                <li key={i} className="leading-7">
                  {rich(item)}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "formula":
      return (
        <div className="rounded-lg border bg-muted/30 px-4 py-3">
          <BlockMath latex={section.latex} />
          {section.caption && (
            <p className="mt-1 text-center text-sm text-muted-foreground">
              {rich(section.caption)}
            </p>
          )}
        </div>
      );
    case "example":
      return (
        <Card>
          <CardContent className="space-y-3 pt-6">
            <p className="font-medium">Worked example</p>
            <p className="leading-7">{rich(section.prompt)}</p>
            <ol className="ml-5 list-decimal space-y-1 text-muted-foreground">
              {section.steps.map((s, i) => (
                <li key={i} className="leading-7">
                  {rich(s)}
                </li>
              ))}
            </ol>
            <p className="rounded-md bg-muted px-3 py-2 text-sm font-medium">
              {rich(section.answer)}
            </p>
          </CardContent>
        </Card>
      );
    case "mistakes":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Common mistakes</h3>
          <div className="space-y-3">
            {section.items.map((m, i) => (
              <div key={i} className="rounded-lg border p-4">
                <p className="text-sm text-destructive">✗ {rich(m.wrong)}</p>
                <p className="mt-1 text-sm text-muted-foreground">✓ {rich(m.right)}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "summary":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Summary</h3>
          <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
            {section.points.map((p, i) => (
              <li key={i} className="leading-7">
                {rich(p)}
              </li>
            ))}
          </ul>
        </div>
      );
    case "callout": {
      const cfg = {
        definition: { icon: BookOpen, label: "Definition", cls: "border-primary/30 bg-primary/5" },
        remember: { icon: Pin, label: "Remember", cls: "border-amber-500/30 bg-amber-500/5" },
        tip: { icon: Lightbulb, label: "Exam tip", cls: "border-emerald-500/30 bg-emerald-500/5" },
        didyouknow: {
          icon: Sparkles,
          label: "Did you know?",
          cls: "border-sky-500/30 bg-sky-500/5",
        },
      }[section.variant];
      const Icon = cfg.icon;
      return (
        <div className={`rounded-lg border p-4 ${cfg.cls}`}>
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
            <Icon className="size-4" />
            {rich(section.title ?? cfg.label)}
          </div>
          <p className="text-sm leading-7 text-muted-foreground">{rich(section.body)}</p>
        </div>
      );
    }
    case "realWorld":
      return (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Globe className="size-5 text-primary" />
            {rich(section.heading ?? "Where you meet this in real life")}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.items.map((item, i) => (
              <div key={i} className="rounded-lg border p-4">
                <p className="text-sm font-medium">{item.area}</p>
                <p className="mt-1 text-sm text-muted-foreground">{rich(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "flashcards":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Flashcards</h3>
          <Flashcards cards={section.cards} />
        </div>
      );
    case "quiz":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Quick quiz</h3>
          <Quiz questions={section.questions} />
        </div>
      );
    case "cards": {
      const cols = section.columns ?? 3;
      const gridCls =
        cols === 4 ? "sm:grid-cols-4" : cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";
      return (
        <div className="space-y-3">
          {section.heading && <h3 className="text-lg font-semibold">{rich(section.heading)}</h3>}
          <div className={`grid gap-3 ${gridCls}`}>
            {section.items.map((card, i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="mb-2 flex items-center gap-2">
                  {card.icon && <LessonIcon name={card.icon} className="size-5 text-primary" />}
                  <span className="font-medium">{rich(card.title)}</span>
                </div>
                {(card.value || card.unit) && (
                  <p className="text-sm">
                    <span className="font-semibold">{card.value && rich(card.value)}</span>
                    {card.unit && <span className="text-muted-foreground"> {card.unit}</span>}
                  </p>
                )}
                {card.text && (
                  <p className="mt-1 text-sm text-muted-foreground">{rich(card.text)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "table":
      return (
        <div className="space-y-2">
          {section.heading && <h3 className="text-lg font-semibold">{rich(section.heading)}</h3>}
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  {section.headers.map((h, i) => (
                    <th key={i} className="px-3 py-2 text-left font-semibold">
                      {rich(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, ri) => (
                  <tr key={ri} className="border-t">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-3 py-2 text-muted-foreground">
                        {rich(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.note && <p className="text-xs text-muted-foreground">{rich(section.note)}</p>}
        </div>
      );
    case "comparison":
      return (
        <div className="space-y-3">
          {section.heading && <h3 className="text-lg font-semibold">{rich(section.heading)}</h3>}
          <div className="grid gap-3 sm:grid-cols-2">
            {[section.left, section.right].map((col, i) => (
              <div key={i} className="rounded-lg border p-4">
                <p className="mb-2 font-medium">{rich(col.title)}</p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
                  {col.items.map((it, j) => (
                    <li key={j}>{rich(it)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    case "motionExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{rich(section.heading ?? "Motion explorer")}</h3>
          <MotionExplorer lessonId={lessonId} />
        </div>
      );
    case "motionGraphExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Motion graph explorer")}
          </h3>
          <MotionGraphExplorer lessonId={lessonId} />
        </div>
      );
    case "forceExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{rich(section.heading ?? "Force explorer")}</h3>
          <ForceExplorer lessonId={lessonId} />
        </div>
      );
    case "pressureExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{rich(section.heading ?? "Pressure explorer")}</h3>
          <PressureExplorer lessonId={lessonId} />
        </div>
      );
    case "dimensionalAnalysisExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Dimensional analysis explorer")}
          </h3>
          <DimensionalAnalysisExplorer lessonId={lessonId} />
        </div>
      );
    case "measurementUncertaintyExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Measurement and uncertainty explorer")}
          </h3>
          <MeasurementUncertaintyExplorer lessonId={lessonId} />
        </div>
      );
    case "integerNumberLineExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Integer number-line explorer")}
          </h3>
          <IntegerNumberLineExplorer lessonId={lessonId} />
        </div>
      );
    case "integerRulesExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Integer sign-rule explorer")}
          </h3>
          <IntegerRulesExplorer lessonId={lessonId} />
        </div>
      );
    case "rationalNumberExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Real-number explorer")}
          </h3>
          <RationalNumberExplorer lessonId={lessonId} />
        </div>
      );
    case "algebraExpressionExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Algebra expression laboratory")}
          </h3>
          <AlgebraExpressionExplorer lessonId={lessonId} />
        </div>
      );
    case "simplifyingExpressionsExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Simplifying expressions laboratory")}
          </h3>
          <SimplifyingExpressionsExplorer lessonId={lessonId} />
        </div>
      );
    case "equationBalanceExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Equation balance laboratory")}
          </h3>
          <EquationBalanceExplorer lessonId={lessonId} />
        </div>
      );
    case "factorPrimeExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Factors and primes laboratory")}
          </h3>
          <FactorPrimeExplorer lessonId={lessonId} mode={section.mode} />
        </div>
      );
    case "coordinateDataExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Coordinate and data laboratory")}
          </h3>
          <CoordinateDataExplorer lessonId={lessonId} mode={section.mode} />
        </div>
      );
    case "energyExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{rich(section.heading ?? "Energy explorer")}</h3>
          <EnergyExplorer lessonId={lessonId} />
        </div>
      );
    case "kinematicsExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Kinematics explorer")}
          </h3>
          <KinematicsExplorer lessonId={lessonId} mode={section.mode} />
        </div>
      );
    case "densityExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Matter and density explorer")}
          </h3>
          <DensityExplorer lessonId={lessonId} />
        </div>
      );
    case "instrumentActivity":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Choose the correct instrument")}
          </h3>
          <InstrumentActivity lessonId={lessonId} scenarios={section.scenarios} />
        </div>
      );
    case "classifyActivity":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Classify the quantity")}
          </h3>
          <ClassifyActivity
            lessonId={lessonId}
            categories={section.categories}
            items={section.items}
            stepKey={section.stepKey}
          />
        </div>
      );
    case "practice":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{rich(section.heading ?? "Practice")}</h3>
          <PracticeQuestions
            lessonId={lessonId}
            questions={section.questions}
            stepKey={section.stepKey}
          />
        </div>
      );
    case "gradedQuiz":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{rich(section.heading ?? "Lesson quiz")}</h3>
          <GradedQuiz
            lessonId={lessonId}
            questions={section.questions}
            passMark={section.passMark}
          />
        </div>
      );
    case "completion":
      return (
        <LessonCompletion
          lessonId={lessonId}
          steps={section.steps}
          requireQuizPass={section.requireQuizPass}
        />
      );
    case "rootsExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Square and cube root laboratory")}
          </h3>
          <RootsExplorer lessonId={lessonId} />
        </div>
      );
    case "standardFormExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Standard form laboratory")}
          </h3>
          <StandardFormExplorer lessonId={lessonId} />
        </div>
      );
    case "unitConverterExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Unit conversion laboratory")}
          </h3>
          <UnitConverterExplorer lessonId={lessonId} />
        </div>
      );
    case "perimeterAreaExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Perimeter and area laboratory")}
          </h3>
          <PerimeterAreaExplorer lessonId={lessonId} />
        </div>
      );
    case "volumeSurfaceExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Volume and surface-area laboratory")}
          </h3>
          <VolumeSurfaceExplorer lessonId={lessonId} />
        </div>
      );
    case "linearEquationSolverExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Linear equation solving laboratory")}
          </h3>
          <LinearEquationSolverExplorer lessonId={lessonId} />
        </div>
      );
    case "wordProblemTranslatorExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Translate a word problem into algebra")}
          </h3>
          <WordProblemTranslatorExplorer lessonId={lessonId} />
        </div>
      );
    case "inequalityExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Inequality solving laboratory")}
          </h3>
          <InequalityExplorer lessonId={lessonId} />
        </div>
      );
    case "simultaneousEquationsExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Simultaneous equations laboratory")}
          </h3>
          <SimultaneousEquationsExplorer lessonId={lessonId} />
        </div>
      );
    case "polynomialMultiplyExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Polynomial multiplication laboratory")}
          </h3>
          <PolynomialMultiplyExplorer lessonId={lessonId} />
        </div>
      );
    case "polynomialDivisionExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Polynomial division laboratory")}
          </h3>
          <PolynomialDivisionExplorer lessonId={lessonId} />
        </div>
      );
    case "factoringExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Factoring laboratory")}
          </h3>
          <FactoringExplorer lessonId={lessonId} />
        </div>
      );
    case "rationalExpressionExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Rational expressions laboratory")}
          </h3>
          <RationalExpressionExplorer lessonId={lessonId} />
        </div>
      );
    case "unitCircleExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Unit circle explorer")}
          </h3>
          <UnitCircleExplorer />
        </div>
      );
    case "trigGraphExplorer":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {rich(section.heading ?? "Trigonometric graphs")}
          </h3>
          <TrigGraphExplorer />
        </div>
      );
    case "figure":
      return (
        <figure className="flex flex-col items-center gap-3 rounded-lg border bg-muted/30 p-6">
          <FigureView figure={section.figure} />
          {section.caption && (
            <figcaption className="text-center text-sm text-muted-foreground">
              {rich(section.caption)}
            </figcaption>
          )}
        </figure>
      );
    case "history":
      return (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">A little history</h3>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="leading-7 text-muted-foreground">
              {rich(p)}
            </p>
          ))}
        </div>
      );
  }
}

export function LessonBody({
  sections,
  lessonId,
}: {
  sections: LessonSection[];
  lessonId: string;
}) {
  return (
    <div className="space-y-8">
      {sections.map((section, i) => (
        <div key={i} id={`s-${i}`} className="scroll-mt-24">
          <SectionBlock section={section} lessonId={lessonId} />
        </div>
      ))}
    </div>
  );
}
