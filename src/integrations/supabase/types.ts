export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          action_data: Json | null
          action_type: string
          created_at: string
          id: string
          scan_id: string | null
          user_id: string
        }
        Insert: {
          action_data?: Json | null
          action_type: string
          created_at?: string
          id?: string
          scan_id?: string | null
          user_id: string
        }
        Update: {
          action_data?: Json | null
          action_type?: string
          created_at?: string
          id?: string
          scan_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_tasks: {
        Row: {
          agent_type: string
          completed_at: string | null
          created_at: string
          id: string
          input_data: Json
          output_data: Json | null
          scan_id: string
          started_at: string | null
          status: string
        }
        Insert: {
          agent_type: string
          completed_at?: string | null
          created_at?: string
          id?: string
          input_data: Json
          output_data?: Json | null
          scan_id: string
          started_at?: string | null
          status?: string
        }
        Update: {
          agent_type?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          input_data?: Json
          output_data?: Json | null
          scan_id?: string
          started_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_tasks_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
        ]
      }
      allowed_domains: {
        Row: {
          added_by: string | null
          created_at: string
          description: string | null
          domain: string
          id: string
          is_wildcard: boolean | null
        }
        Insert: {
          added_by?: string | null
          created_at?: string
          description?: string | null
          domain: string
          id?: string
          is_wildcard?: boolean | null
        }
        Update: {
          added_by?: string | null
          created_at?: string
          description?: string | null
          domain?: string
          id?: string
          is_wildcard?: boolean | null
        }
        Relationships: []
      }
      app_scans: {
        Row: {
          apk_hash: string
          created_at: string
          flags: Json | null
          id: string
          metadata: Json | null
          package_name: string
          risk_score: number
          scanned_by: string | null
          sha256: string | null
          source: Database["public"]["Enums"]["scan_source"] | null
          status: Database["public"]["Enums"]["verification_status"]
        }
        Insert: {
          apk_hash: string
          created_at?: string
          flags?: Json | null
          id?: string
          metadata?: Json | null
          package_name: string
          risk_score: number
          scanned_by?: string | null
          sha256?: string | null
          source?: Database["public"]["Enums"]["scan_source"] | null
          status?: Database["public"]["Enums"]["verification_status"]
        }
        Update: {
          apk_hash?: string
          created_at?: string
          flags?: Json | null
          id?: string
          metadata?: Json | null
          package_name?: string
          risk_score?: number
          scanned_by?: string | null
          sha256?: string | null
          source?: Database["public"]["Enums"]["scan_source"] | null
          status?: Database["public"]["Enums"]["verification_status"]
        }
        Relationships: []
      }
      audit_log: {
        Row: {
          actor_id: string | null
          chain_hash: string | null
          created_at: string
          event_type: string
          id: string
          metadata: Json | null
          payload_hash: string
          previous_hash: string | null
        }
        Insert: {
          actor_id?: string | null
          chain_hash?: string | null
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json | null
          payload_hash: string
          previous_hash?: string | null
        }
        Update: {
          actor_id?: string | null
          chain_hash?: string | null
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json | null
          payload_hash?: string
          previous_hash?: string | null
        }
        Relationships: []
      }
      benchmark_results: {
        Row: {
          benchmark_run_id: string
          confidence: number | null
          created_at: string
          detected: boolean
          expected_result: boolean
          id: string
          is_false_positive: boolean
          scan_id: string | null
          scan_time_ms: number
          severity: string
          source: string
          target_id: string
          target_name: string
          target_url: string
          vulnerability_type: string
        }
        Insert: {
          benchmark_run_id: string
          confidence?: number | null
          created_at?: string
          detected: boolean
          expected_result: boolean
          id?: string
          is_false_positive?: boolean
          scan_id?: string | null
          scan_time_ms: number
          severity: string
          source: string
          target_id: string
          target_name: string
          target_url: string
          vulnerability_type: string
        }
        Update: {
          benchmark_run_id?: string
          confidence?: number | null
          created_at?: string
          detected?: boolean
          expected_result?: boolean
          id?: string
          is_false_positive?: boolean
          scan_id?: string | null
          scan_time_ms?: number
          severity?: string
          source?: string
          target_id?: string
          target_name?: string
          target_url?: string
          vulnerability_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "benchmark_results_benchmark_run_id_fkey"
            columns: ["benchmark_run_id"]
            isOneToOne: false
            referencedRelation: "benchmark_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "benchmark_results_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
        ]
      }
      benchmark_runs: {
        Row: {
          avg_scan_time_ms: number | null
          comparison_mode: string
          completed_at: string | null
          cost_per_finding: number | null
          created_at: string
          detected_count: number | null
          detection_rate: number | null
          false_positive_count: number | null
          false_positive_rate: number | null
          id: string
          results_summary: Json | null
          started_at: string
          status: string
          total_scan_time_ms: number | null
          total_targets: number
          user_id: string
        }
        Insert: {
          avg_scan_time_ms?: number | null
          comparison_mode?: string
          completed_at?: string | null
          cost_per_finding?: number | null
          created_at?: string
          detected_count?: number | null
          detection_rate?: number | null
          false_positive_count?: number | null
          false_positive_rate?: number | null
          id?: string
          results_summary?: Json | null
          started_at?: string
          status?: string
          total_scan_time_ms?: number | null
          total_targets?: number
          user_id: string
        }
        Update: {
          avg_scan_time_ms?: number | null
          comparison_mode?: string
          completed_at?: string | null
          cost_per_finding?: number | null
          created_at?: string
          detected_count?: number | null
          detection_rate?: number | null
          false_positive_count?: number | null
          false_positive_rate?: number | null
          id?: string
          results_summary?: Json | null
          started_at?: string
          status?: string
          total_scan_time_ms?: number | null
          total_targets?: number
          user_id?: string
        }
        Relationships: []
      }
      biometric_embeddings: {
        Row: {
          created_at: string
          embedding_type: Database["public"]["Enums"]["embedding_type"]
          id: string
          pii_encrypted: string | null
          salt: string
          user_id: string
          vector_hash: string
        }
        Insert: {
          created_at?: string
          embedding_type: Database["public"]["Enums"]["embedding_type"]
          id?: string
          pii_encrypted?: string | null
          salt: string
          user_id: string
          vector_hash: string
        }
        Update: {
          created_at?: string
          embedding_type?: Database["public"]["Enums"]["embedding_type"]
          id?: string
          pii_encrypted?: string | null
          salt?: string
          user_id?: string
          vector_hash?: string
        }
        Relationships: []
      }
      bounty_submissions: {
        Row: {
          bounty_amount: number | null
          created_at: string
          id: string
          platform: string
          response: string | null
          status: string
          submission_id: string | null
          submitted_at: string | null
          updated_at: string
          user_id: string
          vulnerability_id: string
        }
        Insert: {
          bounty_amount?: number | null
          created_at?: string
          id?: string
          platform: string
          response?: string | null
          status?: string
          submission_id?: string | null
          submitted_at?: string | null
          updated_at?: string
          user_id: string
          vulnerability_id: string
        }
        Update: {
          bounty_amount?: number | null
          created_at?: string
          id?: string
          platform?: string
          response?: string | null
          status?: string
          submission_id?: string | null
          submitted_at?: string | null
          updated_at?: string
          user_id?: string
          vulnerability_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bounty_submissions_vulnerability_id_fkey"
            columns: ["vulnerability_id"]
            isOneToOne: false
            referencedRelation: "vulnerabilities"
            referencedColumns: ["id"]
          },
        ]
      }
      complaints: {
        Row: {
          assigned_to: string | null
          category: string
          channel: Database["public"]["Enums"]["channel_type"] | null
          complaint_text: string
          created_at: string
          detected_intent: string | null
          entities: Json | null
          id: string
          language: string | null
          metadata: Json | null
          original_text_encrypted: string | null
          priority: Database["public"]["Enums"]["complaint_priority"]
          resolved_at: string | null
          sla_deadline: string
          status: Database["public"]["Enums"]["complaint_status"]
          transcript_hash: string | null
          user_id: string
        }
        Insert: {
          assigned_to?: string | null
          category: string
          channel?: Database["public"]["Enums"]["channel_type"] | null
          complaint_text: string
          created_at?: string
          detected_intent?: string | null
          entities?: Json | null
          id?: string
          language?: string | null
          metadata?: Json | null
          original_text_encrypted?: string | null
          priority?: Database["public"]["Enums"]["complaint_priority"]
          resolved_at?: string | null
          sla_deadline: string
          status?: Database["public"]["Enums"]["complaint_status"]
          transcript_hash?: string | null
          user_id: string
        }
        Update: {
          assigned_to?: string | null
          category?: string
          channel?: Database["public"]["Enums"]["channel_type"] | null
          complaint_text?: string
          created_at?: string
          detected_intent?: string | null
          entities?: Json | null
          id?: string
          language?: string | null
          metadata?: Json | null
          original_text_encrypted?: string | null
          priority?: Database["public"]["Enums"]["complaint_priority"]
          resolved_at?: string | null
          sla_deadline?: string
          status?: Database["public"]["Enums"]["complaint_status"]
          transcript_hash?: string | null
          user_id?: string
        }
        Relationships: []
      }
      consent_records: {
        Row: {
          consent_token: string
          created_at: string
          expires_at: string
          id: string
          issued_at: string
          issuer_institution_id: string | null
          ledger_ref: string | null
          scope: Json
          status: Database["public"]["Enums"]["consent_status"]
          user_id: string
        }
        Insert: {
          consent_token: string
          created_at?: string
          expires_at: string
          id?: string
          issued_at?: string
          issuer_institution_id?: string | null
          ledger_ref?: string | null
          scope?: Json
          status?: Database["public"]["Enums"]["consent_status"]
          user_id: string
        }
        Update: {
          consent_token?: string
          created_at?: string
          expires_at?: string
          id?: string
          issued_at?: string
          issuer_institution_id?: string | null
          ledger_ref?: string | null
          scope?: Json
          status?: Database["public"]["Enums"]["consent_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "consent_records_issuer_institution_id_fkey"
            columns: ["issuer_institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consent_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crawled_endpoints: {
        Row: {
          content_type: string | null
          created_at: string | null
          depth: number | null
          http_method: string | null
          id: string
          parameters: Json | null
          response_status: number | null
          scan_id: string
          source: string
          url: string
        }
        Insert: {
          content_type?: string | null
          created_at?: string | null
          depth?: number | null
          http_method?: string | null
          id?: string
          parameters?: Json | null
          response_status?: number | null
          scan_id: string
          source: string
          url: string
        }
        Update: {
          content_type?: string | null
          created_at?: string | null
          depth?: number | null
          http_method?: string | null
          id?: string
          parameters?: Json | null
          response_status?: number | null
          scan_id?: string
          source?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "crawled_endpoints_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback_logs: {
        Row: {
          anonymized_data: Json
          created_at: string
          feedback_type: Database["public"]["Enums"]["feedback_type"]
          id: string
          user_id: string
          vulnerability_id: string
        }
        Insert: {
          anonymized_data: Json
          created_at?: string
          feedback_type: Database["public"]["Enums"]["feedback_type"]
          id?: string
          user_id: string
          vulnerability_id: string
        }
        Update: {
          anonymized_data?: Json
          created_at?: string
          feedback_type?: Database["public"]["Enums"]["feedback_type"]
          id?: string
          user_id?: string
          vulnerability_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "feedback_logs_vulnerability_id_fkey"
            columns: ["vulnerability_id"]
            isOneToOne: false
            referencedRelation: "vulnerabilities"
            referencedColumns: ["id"]
          },
        ]
      }
      gdpr_requests: {
        Row: {
          completed_at: string | null
          created_at: string
          data_url: string | null
          id: string
          request_type: string
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          data_url?: string | null
          id?: string
          request_type: string
          status?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          data_url?: string | null
          id?: string
          request_type?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      hackerone_submissions: {
        Row: {
          bounty_amount: number | null
          bounty_awarded_at: string | null
          bounty_currency: string | null
          created_at: string
          error_message: string | null
          hackerone_report_id: string | null
          hackerone_report_url: string | null
          id: string
          program_handle: string
          retry_count: number | null
          scan_id: string
          status: string
          submission_payload: Json | null
          submission_response: Json | null
          updated_at: string
          user_id: string
          vulnerability_id: string
        }
        Insert: {
          bounty_amount?: number | null
          bounty_awarded_at?: string | null
          bounty_currency?: string | null
          created_at?: string
          error_message?: string | null
          hackerone_report_id?: string | null
          hackerone_report_url?: string | null
          id?: string
          program_handle: string
          retry_count?: number | null
          scan_id: string
          status?: string
          submission_payload?: Json | null
          submission_response?: Json | null
          updated_at?: string
          user_id: string
          vulnerability_id: string
        }
        Update: {
          bounty_amount?: number | null
          bounty_awarded_at?: string | null
          bounty_currency?: string | null
          created_at?: string
          error_message?: string | null
          hackerone_report_id?: string | null
          hackerone_report_url?: string | null
          id?: string
          program_handle?: string
          retry_count?: number | null
          scan_id?: string
          status?: string
          submission_payload?: Json | null
          submission_response?: Json | null
          updated_at?: string
          user_id?: string
          vulnerability_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackerone_submissions_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackerone_submissions_vulnerability_id_fkey"
            columns: ["vulnerability_id"]
            isOneToOne: false
            referencedRelation: "vulnerabilities"
            referencedColumns: ["id"]
          },
        ]
      }
      institutions: {
        Row: {
          client_id: string | null
          created_at: string
          id: string
          metadata: Json | null
          name: string
          public_key: string | null
          status: Database["public"]["Enums"]["entity_status"]
          type: Database["public"]["Enums"]["institution_type"]
          updated_at: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          name: string
          public_key?: string | null
          status?: Database["public"]["Enums"]["entity_status"]
          type: Database["public"]["Enums"]["institution_type"]
          updated_at?: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          name?: string
          public_key?: string | null
          status?: Database["public"]["Enums"]["entity_status"]
          type?: Database["public"]["Enums"]["institution_type"]
          updated_at?: string
        }
        Relationships: []
      }
      learning_metrics: {
        Row: {
          f1_score: number | null
          false_positive_rate: number | null
          id: string
          last_updated: string
          metadata: Json | null
          model_accuracy: number
          precision_score: number | null
          recall_score: number | null
          total_feedback_count: number
          unverified_accuracy: number | null
          verification_rate: number | null
          verified_accuracy: number | null
        }
        Insert: {
          f1_score?: number | null
          false_positive_rate?: number | null
          id?: string
          last_updated?: string
          metadata?: Json | null
          model_accuracy?: number
          precision_score?: number | null
          recall_score?: number | null
          total_feedback_count?: number
          unverified_accuracy?: number | null
          verification_rate?: number | null
          verified_accuracy?: number | null
        }
        Update: {
          f1_score?: number | null
          false_positive_rate?: number | null
          id?: string
          last_updated?: string
          metadata?: Json | null
          model_accuracy?: number
          precision_score?: number | null
          recall_score?: number | null
          total_feedback_count?: number
          unverified_accuracy?: number | null
          verification_rate?: number | null
          verified_accuracy?: number | null
        }
        Relationships: []
      }
      learning_metrics_history: {
        Row: {
          created_at: string
          f1_score: number
          false_negatives: number
          false_positive_rate: number
          false_positives: number
          id: string
          model_accuracy: number
          payload_success_rates: Json | null
          precision_score: number
          recall_score: number
          total_feedback_count: number
          true_positives: number
          verification_rate: number
        }
        Insert: {
          created_at?: string
          f1_score?: number
          false_negatives?: number
          false_positive_rate?: number
          false_positives?: number
          id?: string
          model_accuracy?: number
          payload_success_rates?: Json | null
          precision_score?: number
          recall_score?: number
          total_feedback_count?: number
          true_positives?: number
          verification_rate?: number
        }
        Update: {
          created_at?: string
          f1_score?: number
          false_negatives?: number
          false_positive_rate?: number
          false_positives?: number
          id?: string
          model_accuracy?: number
          payload_success_rates?: Json | null
          precision_score?: number
          recall_score?: number
          total_feedback_count?: number
          true_positives?: number
          verification_rate?: number
        }
        Relationships: []
      }
      nvd_cve_cache: {
        Row: {
          created_at: string
          cve_id: string
          cvss_score: number | null
          description: string
          id: string
          published_date: string | null
          raw_data: Json
          severity: string | null
        }
        Insert: {
          created_at?: string
          cve_id: string
          cvss_score?: number | null
          description: string
          id?: string
          published_date?: string | null
          raw_data: Json
          severity?: string | null
        }
        Update: {
          created_at?: string
          cve_id?: string
          cvss_score?: number | null
          description?: string
          id?: string
          published_date?: string | null
          raw_data?: Json
          severity?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
          kyc_verified: boolean | null
          name: string
          phone: string | null
          pii_encrypted: string | null
          status: Database["public"]["Enums"]["entity_status"] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          kyc_verified?: boolean | null
          name: string
          phone?: string | null
          pii_encrypted?: string | null
          status?: Database["public"]["Enums"]["entity_status"] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          kyc_verified?: boolean | null
          name?: string
          phone?: string | null
          pii_encrypted?: string | null
          status?: Database["public"]["Enums"]["entity_status"] | null
          updated_at?: string
        }
        Relationships: []
      }
      proofs: {
        Row: {
          created_at: string
          expires_at: string | null
          file_hash: string
          id: string
          metadata: Json | null
          proof_type: string
          scan_id: string
          signed_url: string | null
          storage_path: string
          total_vulnerabilities: number | null
          unverified_count: number | null
          user_id: string
          verified_count: number | null
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          file_hash: string
          id?: string
          metadata?: Json | null
          proof_type?: string
          scan_id: string
          signed_url?: string | null
          storage_path: string
          total_vulnerabilities?: number | null
          unverified_count?: number | null
          user_id: string
          verified_count?: number | null
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          file_hash?: string
          id?: string
          metadata?: Json | null
          proof_type?: string
          scan_id?: string
          signed_url?: string | null
          storage_path?: string
          total_vulnerabilities?: number | null
          unverified_count?: number | null
          user_id?: string
          verified_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "proofs_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
        ]
      }
      rate_limit_logs: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          request_count: number
          user_id: string
          window_start: string
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          request_count?: number
          user_id: string
          window_start?: string
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          request_count?: number
          user_id?: string
          window_start?: string
        }
        Relationships: []
      }
      report_templates: {
        Row: {
          created_at: string
          custom_fields: Json | null
          description: string | null
          id: string
          name: string
          sections: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          custom_fields?: Json | null
          description?: string | null
          id?: string
          name: string
          sections?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          custom_fields?: Json | null
          description?: string | null
          id?: string
          name?: string
          sections?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      scan_logs: {
        Row: {
          created_at: string
          id: string
          is_replay: boolean | null
          log_hash: string
          marker_found: boolean | null
          replay_marker: string | null
          request_body: string | null
          request_headers: Json | null
          request_method: string
          request_url: string
          response_headers: Json | null
          response_snippet: string | null
          response_status: number | null
          response_time_ms: number | null
          scan_id: string
          vulnerability_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_replay?: boolean | null
          log_hash: string
          marker_found?: boolean | null
          replay_marker?: string | null
          request_body?: string | null
          request_headers?: Json | null
          request_method: string
          request_url: string
          response_headers?: Json | null
          response_snippet?: string | null
          response_status?: number | null
          response_time_ms?: number | null
          scan_id: string
          vulnerability_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_replay?: boolean | null
          log_hash?: string
          marker_found?: boolean | null
          replay_marker?: string | null
          request_body?: string | null
          request_headers?: Json | null
          request_method?: string
          request_url?: string
          response_headers?: Json | null
          response_snippet?: string | null
          response_status?: number | null
          response_time_ms?: number | null
          scan_id?: string
          vulnerability_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scan_logs_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scan_logs_vulnerability_id_fkey"
            columns: ["vulnerability_id"]
            isOneToOne: false
            referencedRelation: "vulnerabilities"
            referencedColumns: ["id"]
          },
        ]
      }
      scan_templates: {
        Row: {
          config: Json
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          config?: Json
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          config?: Json
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      scans: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          hackerone_scope_id: string | null
          id: string
          progress: number
          proof_generated: boolean | null
          proof_id: string | null
          started_at: string | null
          status: Database["public"]["Enums"]["scan_status"]
          target_url: string
          unverified_vulns_count: number | null
          user_id: string
          verified_vulns_count: number | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          hackerone_scope_id?: string | null
          id?: string
          progress?: number
          proof_generated?: boolean | null
          proof_id?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["scan_status"]
          target_url: string
          unverified_vulns_count?: number | null
          user_id: string
          verified_vulns_count?: number | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          hackerone_scope_id?: string | null
          id?: string
          progress?: number
          proof_generated?: boolean | null
          proof_id?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["scan_status"]
          target_url?: string
          unverified_vulns_count?: number | null
          user_id?: string
          verified_vulns_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "scans_proof_id_fkey"
            columns: ["proof_id"]
            isOneToOne: false
            referencedRelation: "proofs"
            referencedColumns: ["id"]
          },
        ]
      }
      threat_intel: {
        Row: {
          attack_patterns: string[] | null
          created_at: string
          cve_id: string | null
          cvss_score: number | null
          epss_score: number | null
          id: string
          last_updated: string
          mitre_techniques: string[] | null
          raw_data: Json | null
        }
        Insert: {
          attack_patterns?: string[] | null
          created_at?: string
          cve_id?: string | null
          cvss_score?: number | null
          epss_score?: number | null
          id?: string
          last_updated?: string
          mitre_techniques?: string[] | null
          raw_data?: Json | null
        }
        Update: {
          attack_patterns?: string[] | null
          created_at?: string
          cve_id?: string | null
          cvss_score?: number | null
          epss_score?: number | null
          id?: string
          last_updated?: string
          mitre_techniques?: string[] | null
          raw_data?: Json | null
        }
        Relationships: []
      }
      user_api_keys: {
        Row: {
          created_at: string
          encrypted_key: string
          id: string
          is_active: boolean
          last_used: string | null
          service_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          encrypted_key: string
          id?: string
          is_active?: boolean
          last_used?: string | null
          service_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          encrypted_key?: string
          id?: string
          is_active?: boolean
          last_used?: string | null
          service_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          created_at: string
          email_notifications: boolean
          id: string
          notifications_enabled: boolean
          scan_completion_alerts: boolean
          theme: string
          updated_at: string
          user_id: string
          vulnerability_alerts: boolean
        }
        Insert: {
          created_at?: string
          email_notifications?: boolean
          id?: string
          notifications_enabled?: boolean
          scan_completion_alerts?: boolean
          theme?: string
          updated_at?: string
          user_id: string
          vulnerability_alerts?: boolean
        }
        Update: {
          created_at?: string
          email_notifications?: boolean
          id?: string
          notifications_enabled?: boolean
          scan_completion_alerts?: boolean
          theme?: string
          updated_at?: string
          user_id?: string
          vulnerability_alerts?: boolean
        }
        Relationships: []
      }
      user_quotas: {
        Row: {
          created_at: string
          id: string
          rate_limit_per_minute: number
          reset_at: string
          scan_limit: number
          scans_used: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          rate_limit_per_minute?: number
          reset_at?: string
          scan_limit?: number
          scans_used?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          rate_limit_per_minute?: number
          reset_at?: string
          scan_limit?: number
          scans_used?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      verification_jobs: {
        Row: {
          completed_at: string | null
          consent_token: string | null
          created_at: string
          deepfake_probability: number | null
          explainability_url: string | null
          face_similarity: number | null
          id: string
          ledger_ref: string | null
          media_id: string | null
          media_id_old: string | null
          media_type: string
          recommended_action:
            | Database["public"]["Enums"]["recommended_action"]
            | null
          result_metadata: Json | null
          status: Database["public"]["Enums"]["verification_status"]
          trust_score: number | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          consent_token?: string | null
          created_at?: string
          deepfake_probability?: number | null
          explainability_url?: string | null
          face_similarity?: number | null
          id?: string
          ledger_ref?: string | null
          media_id?: string | null
          media_id_old?: string | null
          media_type: string
          recommended_action?:
            | Database["public"]["Enums"]["recommended_action"]
            | null
          result_metadata?: Json | null
          status?: Database["public"]["Enums"]["verification_status"]
          trust_score?: number | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          consent_token?: string | null
          created_at?: string
          deepfake_probability?: number | null
          explainability_url?: string | null
          face_similarity?: number | null
          id?: string
          ledger_ref?: string | null
          media_id?: string | null
          media_id_old?: string | null
          media_type?: string
          recommended_action?:
            | Database["public"]["Enums"]["recommended_action"]
            | null
          result_metadata?: Json | null
          status?: Database["public"]["Enums"]["verification_status"]
          trust_score?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "verification_jobs_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "video_media"
            referencedColumns: ["id"]
          },
        ]
      }
      video_media: {
        Row: {
          bucket_path: string
          created_at: string
          file_size: number | null
          hash_sha256: string
          id: string
          media_type: Database["public"]["Enums"]["media_type"]
          ttl_expires_at: string
          user_id: string
        }
        Insert: {
          bucket_path: string
          created_at?: string
          file_size?: number | null
          hash_sha256: string
          id?: string
          media_type: Database["public"]["Enums"]["media_type"]
          ttl_expires_at?: string
          user_id: string
        }
        Update: {
          bucket_path?: string
          created_at?: string
          file_size?: number | null
          hash_sha256?: string
          id?: string
          media_type?: Database["public"]["Enums"]["media_type"]
          ttl_expires_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_media_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      vulnerabilities: {
        Row: {
          affected_endpoint: string | null
          category: Database["public"]["Enums"]["vuln_category"]
          confidence: number | null
          created_at: string
          cvss_score: number | null
          cwe_id: string | null
          description: string
          detection_method: string | null
          exploitability: string | null
          fix_suggestion: string
          fp_probability: number | null
          hackerone_submission_id: string | null
          id: string
          indicators_found: string[] | null
          is_validated: boolean
          is_verified: boolean | null
          poc: string
          proof_data: Json | null
          replay_log_id: string | null
          scan_id: string
          severity: number
          submitted_to_hackerone: boolean | null
          title: string
          verification_method: string | null
          verification_timestamp: string | null
          vuln_type: string
        }
        Insert: {
          affected_endpoint?: string | null
          category: Database["public"]["Enums"]["vuln_category"]
          confidence?: number | null
          created_at?: string
          cvss_score?: number | null
          cwe_id?: string | null
          description: string
          detection_method?: string | null
          exploitability?: string | null
          fix_suggestion: string
          fp_probability?: number | null
          hackerone_submission_id?: string | null
          id?: string
          indicators_found?: string[] | null
          is_validated?: boolean
          is_verified?: boolean | null
          poc: string
          proof_data?: Json | null
          replay_log_id?: string | null
          scan_id: string
          severity: number
          submitted_to_hackerone?: boolean | null
          title: string
          verification_method?: string | null
          verification_timestamp?: string | null
          vuln_type: string
        }
        Update: {
          affected_endpoint?: string | null
          category?: Database["public"]["Enums"]["vuln_category"]
          confidence?: number | null
          created_at?: string
          cvss_score?: number | null
          cwe_id?: string | null
          description?: string
          detection_method?: string | null
          exploitability?: string | null
          fix_suggestion?: string
          fp_probability?: number | null
          hackerone_submission_id?: string | null
          id?: string
          indicators_found?: string[] | null
          is_validated?: boolean
          is_verified?: boolean | null
          poc?: string
          proof_data?: Json | null
          replay_log_id?: string | null
          scan_id?: string
          severity?: number
          submitted_to_hackerone?: boolean | null
          title?: string
          verification_method?: string | null
          verification_timestamp?: string | null
          vuln_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "vulnerabilities_hackerone_submission_id_fkey"
            columns: ["hackerone_submission_id"]
            isOneToOne: false
            referencedRelation: "hackerone_submissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vulnerabilities_replay_log_id_fkey"
            columns: ["replay_log_id"]
            isOneToOne: false
            referencedRelation: "scan_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vulnerabilities_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "scans"
            referencedColumns: ["id"]
          },
        ]
      }
      vulnerability_comments: {
        Row: {
          comment: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
          vulnerability_id: string
        }
        Insert: {
          comment: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
          vulnerability_id: string
        }
        Update: {
          comment?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
          vulnerability_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vulnerability_comments_vulnerability_id_fkey"
            columns: ["vulnerability_id"]
            isOneToOne: false
            referencedRelation: "vulnerabilities"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      scan_metrics: {
        Row: {
          avg_severity: number | null
          completed_scans: number | null
          total_scans: number | null
          total_vulnerabilities: number | null
          user_id: string | null
          verified_vulnerabilities: number | null
        }
        Relationships: []
      }
      user_scan_metrics: {
        Row: {
          avg_severity: number | null
          completed_scans: number | null
          total_scans: number | null
          total_vulnerabilities: number | null
          user_id: string | null
          verified_vulnerabilities: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      check_rate_limit: {
        Args: { _endpoint: string; _limit?: number; _user_id: string }
        Returns: boolean
      }
      cleanup_expired_media: { Args: never; Returns: undefined }
      decrypt_biometric_data: {
        Args: { encrypted: string; key: string }
        Returns: string
      }
      encrypt_biometric_data: {
        Args: { data: string; key: string }
        Returns: string
      }
      expire_old_consents: { Args: never; Returns: undefined }
      export_ml_training_data: {
        Args: never
        Returns: {
          category: string
          contains_command_chars: number
          contains_sql_keywords: number
          contains_xss_tags: number
          detection_method: string
          feedback_type: string
          has_error_keywords: number
          label: number
          payload_len: number
          response_len: number
          severity: number
          special_chars_count: number
          vuln_type: string
          vulnerability_id: string
        }[]
      }
      export_user_data: { Args: { _user_id: string }; Returns: Json }
      get_user_roles: {
        Args: { _user_id: string }
        Returns: {
          role: Database["public"]["Enums"]["app_role"]
        }[]
      }
      grant_admin_role: { Args: { _user_email: string }; Returns: undefined }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      verify_audit_chain: {
        Args: never
        Returns: {
          broken_at: string
          total_entries: number
          valid: boolean
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "user" | "bank_admin" | "regulator"
      channel_type: "web" | "mobile" | "ivr"
      complaint_priority: "low" | "medium" | "high"
      complaint_status:
        | "open"
        | "assigned"
        | "in_progress"
        | "resolved"
        | "escalated"
      consent_status: "active" | "expired" | "revoked"
      embedding_type: "face" | "voice"
      entity_status: "active" | "suspended" | "deleted"
      feedback_type: "true_positive" | "false_positive"
      institution_type: "bank" | "nbfc" | "fintech" | "regulator"
      media_type: "video" | "image" | "audio"
      recommended_action: "auto_accept" | "manual_review" | "block"
      scan_source: "user" | "crawler" | "playstore"
      scan_status: "idle" | "scanning" | "completed" | "error"
      verification_status: "pending" | "processing" | "completed" | "failed"
      vuln_category: "owasp_top10" | "cwe_top25" | "owasp_llm_top10"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user", "bank_admin", "regulator"],
      channel_type: ["web", "mobile", "ivr"],
      complaint_priority: ["low", "medium", "high"],
      complaint_status: [
        "open",
        "assigned",
        "in_progress",
        "resolved",
        "escalated",
      ],
      consent_status: ["active", "expired", "revoked"],
      embedding_type: ["face", "voice"],
      entity_status: ["active", "suspended", "deleted"],
      feedback_type: ["true_positive", "false_positive"],
      institution_type: ["bank", "nbfc", "fintech", "regulator"],
      media_type: ["video", "image", "audio"],
      recommended_action: ["auto_accept", "manual_review", "block"],
      scan_source: ["user", "crawler", "playstore"],
      scan_status: ["idle", "scanning", "completed", "error"],
      verification_status: ["pending", "processing", "completed", "failed"],
      vuln_category: ["owasp_top10", "cwe_top25", "owasp_llm_top10"],
    },
  },
} as const
