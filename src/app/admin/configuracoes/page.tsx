import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { SettingsForm } from "@/components/sections/admin/settings-form";

export const metadata: Metadata = { title: "Configurações" };

export default function AdminConfiguracoesPage() {
  return (
    <>
      <SectionHeader title="Configurações" description="Informações gerais do site." />
      <SettingsForm />
    </>
  );
}
