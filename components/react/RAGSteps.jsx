import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Search, Database, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';

const RAGSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const steps = [
    {
      id: 'retrieve',
      title: 'Retrieval',
      icon: <Search className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Recherche des documents pertinents',
      detail: "Le système recherche dans la base de données les documents les plus similaires à la question posée. Cette recherche utilise des vecteurs d'embedding pour trouver les correspondances les plus proches.",
      demo: {
        input: "Comment fonctionne l'IA ?",
        output: "Documents trouvés : ['Introduction_IA.pdf', 'Concepts_Base.pdf']"
      }
    },
    {
      id: 'augment',
      title: 'Augmentation',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-green-500',
      description: 'Enrichissement avec le contexte',
      detail: "Les documents sélectionnés sont analysés et les passages les plus pertinents sont extraits pour enrichir la question initiale.",
      demo: {
        input: "Documents sélectionnés",
        output: "Contexte extrait : 'L'IA est un ensemble de techniques...'"
      }
    },
    {
      id: 'generate',
      title: 'Generation',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'Génération de la réponse',
      detail: "Le LLM génère une réponse précise en utilisant uniquement les informations du contexte fourni.",
      demo: {
        input: "Question + Contexte",
        output: "Réponse générée basée sur les documents"
      }
    }
  ];

  const handleStepClick = (index) => {
    if (index === activeStep) {
      if (!completedSteps.includes(index)) {
        setCompletedSteps([...completedSteps, index]);
      }
      if (index < steps.length - 1) {
        setActiveStep(index + 1);
      }
    }
    setShowExplanation(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Construction d'un Pipeline RAG
        </h1>

        {/* Pipeline Visual Flow */}
        <div className="flex justify-center items-center mb-12 space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <Card 
                className={`p-6 cursor-pointer transform transition-all duration-300 hover:scale-105
                  ${activeStep === index ? 'ring-2 ring-blue-500 shadow-lg' : 'opacity-70'}
                  ${completedSteps.includes(index) ? step.color + ' text-white' : 'bg-white'}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="flex flex-col items-center">
                  {step.icon}
                  <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
                  <p className="text-sm text-center mt-1">{step.description}</p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className={`w-6 h-6 ${completedSteps.includes(index) ? 'text-blue-500' : 'text-gray-300'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Explanation Section */}
        {showExplanation && activeStep < steps.length && (
          <Card className="p-6 mb-8 bg-white shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              {steps[activeStep].title} - En détail
            </h3>
            <p className="text-gray-600 mb-6">
              {steps[activeStep].detail}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Démonstration</h4>
              <div className="space-y-2">
                <div className="bg-blue-50 p-2 rounded">
                  <span className="font-medium">Entrée:</span> {steps[activeStep].demo.input}
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <span className="font-medium">Sortie:</span> {steps[activeStep].demo.output}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Instructions */}
        <div className="text-center text-gray-600 mt-8">
          <p>Cliquez sur chaque étape pour découvrir son fonctionnement</p>
          {completedSteps.length === steps.length && (
            <p className="mt-4 text-green-500 font-semibold">
              Félicitations ! Vous avez construit votre premier pipeline RAG !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RAGSteps;