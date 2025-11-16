import React from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Info, 
  BookOpen,
  Zap,
  Database,
  Settings,
  PlayCircle,
  FileText,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Code,
  Layout,
  Layers,
  GitBranch,
  Package,
  Server,
  Terminal,
  ChevronRight,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Copy,
  RefreshCw,
  Calendar,
  BarChart2
} from 'lucide-react';

// Icon mapping for easy use in documentation
const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
  book: BookOpen,
  zap: Zap,
  database: Database,
  settings: Settings,
  play: PlayCircle,
  file: FileText,
  users: Users,
  clock: Clock,
  trending: TrendingUp,
  shield: Shield,
  code: Code,
  layout: Layout,
  layers: Layers,
  branch: GitBranch,
  package: Package,
  server: Server,
  terminal: Terminal,
  chevron: ChevronRight,
  download: Download,
  upload: Upload,
  eye: Eye,
  edit: Edit,
  trash: Trash2,
  copy: Copy,
  refresh: RefreshCw,
  calendar: Calendar,
  chart: BarChart2
};

// Feature Card Component
export const FeatureCard = ({ icon, title, description, color = "#2563eb" }) => {
  const Icon = iconMap[icon] || Info;
  
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        background: `${color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem'
      }}>
        <Icon size={24} color={color} />
      </div>
      <h3 style={{
        fontSize: '1.125rem',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '0.5rem'
      }}>{title}</h3>
      <p style={{
        fontSize: '0.875rem',
        color: '#6b7280',
        lineHeight: '1.6'
      }}>{description}</p>
    </div>
  );
};

// Feature Grid Component
export const FeatureGrid = ({ children }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      margin: '2rem 0'
    }}>
      {children}
    </div>
  );
};

// Status Badge Component
export const StatusBadge = ({ status, text }) => {
  const statusConfig = {
    success: { bg: '#10b981', icon: 'success' },
    error: { bg: '#ef4444', icon: 'error' },
    warning: { bg: '#f59e0b', icon: 'warning' },
    info: { bg: '#2563eb', icon: 'info' },
    pending: { bg: '#6b7280', icon: 'clock' }
  };
  
  const config = statusConfig[status] || statusConfig.info;
  const Icon = iconMap[config.icon];
  
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      background: `${config.bg}15`,
      color: config.bg,
      fontSize: '0.875rem',
      fontWeight: '600'
    }}>
      <Icon size={16} />
      {text}
    </span>
  );
};

// Info Box Component
export const InfoBox = ({ type = 'info', title, children }) => {
  const typeConfig = {
    info: { bg: '#eff6ff', border: '#2563eb', icon: 'info' },
    success: { bg: '#f0fdf4', border: '#10b981', icon: 'success' },
    warning: { bg: '#fffbeb', border: '#f59e0b', icon: 'warning' },
    danger: { bg: '#fef2f2', border: '#ef4444', icon: 'error' }
  };
  
  const config = typeConfig[type];
  const Icon = iconMap[config.icon];
  
  return (
    <div style={{
      background: config.bg,
      borderLeft: `4px solid ${config.border}`,
      borderRadius: '8px',
      padding: '1.5rem',
      margin: '1.5rem 0',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: title ? '0.75rem' : '0'
      }}>
        <Icon size={20} color={config.border} />
        {title && (
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#111827',
            margin: 0
          }}>{title}</h4>
        )}
      </div>
      <div style={{ color: '#374151' }}>
        {children}
      </div>
    </div>
  );
};

// Step Indicator Component
export const StepIndicator = ({ number, title, isActive = false, isCompleted = false }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      background: isActive ? '#eff6ff' : 'white',
      border: `2px solid ${isActive ? '#2563eb' : '#e5e7eb'}`,
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: isCompleted ? '#10b981' : isActive ? '#2563eb' : '#e5e7eb',
        color: isCompleted || isActive ? 'white' : '#6b7280',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        fontSize: '1.125rem'
      }}>
        {isCompleted ? <CheckCircle size={20} /> : number}
      </div>
      <div style={{
        flex: 1,
        fontSize: '1rem',
        fontWeight: '500',
        color: isActive ? '#2563eb' : '#374151'
      }}>
        {title}
      </div>
    </div>
  );
};

// Quick Links Component
export const QuickLinks = ({ links }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f9fafb 0%, white 100%)',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '1.5rem',
      margin: '2rem 0'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Zap size={20} color="#2563eb" />
        Quick Links
      </h3>
      <div style={{
        display: 'grid',
        gap: '0.75rem'
      }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              color: '#374151',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#eff6ff';
              e.currentTarget.style.borderColor = '#2563eb';
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <ChevronRight size={16} color="#2563eb" />
            <span style={{ flex: 1, fontWeight: '500' }}>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

// Demo Component showing all elements
export default function DocumentationComponents() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem'
      }}>
        Documentation Component Library
      </h1>

      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: '600',
        color: '#111827',
        borderBottom: '3px solid #2563eb',
        paddingBottom: '0.75rem',
        marginTop: '3rem',
        marginBottom: '1.5rem'
      }}>Feature Cards</h2>
      
      <FeatureGrid>
        <FeatureCard
          icon="database"
          title="Data Management"
          description="Organize and manage test data efficiently with built-in datasheets"
          color="#2563eb"
        />
        <FeatureCard
          icon="zap"
          title="Fast Execution"
          description="Execute tests with parallel processing and optimized performance"
          color="#10b981"
        />
        <FeatureCard
          icon="shield"
          title="Secure Testing"
          description="Enterprise-grade security for your testing infrastructure"
          color="#f59e0b"
        />
      </FeatureGrid>

      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: '600',
        color: '#111827',
        borderBottom: '3px solid #2563eb',
        paddingBottom: '0.75rem',
        marginTop: '3rem',
        marginBottom: '1.5rem'
      }}>Status Badges</h2>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <StatusBadge status="success" text="Passed" />
        <StatusBadge status="error" text="Failed" />
        <StatusBadge status="warning" text="Warning" />
        <StatusBadge status="info" text="Running" />
        <StatusBadge status="pending" text="Pending" />
      </div>

      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: '600',
        color: '#111827',
        borderBottom: '3px solid #2563eb',
        paddingBottom: '0.75rem',
        marginTop: '3rem',
        marginBottom: '1.5rem'
      }}>Info Boxes</h2>
      
      <InfoBox type="info" title="Information">
        This is an informational message with important details.
      </InfoBox>
      
      <InfoBox type="success" title="Success">
        Operation completed successfully!
      </InfoBox>
      
      <InfoBox type="warning" title="Warning">
        Please review this important warning before proceeding.
      </InfoBox>
      
      <InfoBox type="danger" title="Error">
        An error occurred. Please check your configuration.
      </InfoBox>

      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: '600',
        color: '#111827',
        borderBottom: '3px solid #2563eb',
        paddingBottom: '0.75rem',
        marginTop: '3rem',
        marginBottom: '1.5rem'
      }}>Step Indicators</h2>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <StepIndicator number={1} title="Configure Basic Settings" isCompleted={true} />
        <StepIndicator number={2} title="Add Test Steps" isActive={true} />
        <StepIndicator number={3} title="Execute Tests" />
        <StepIndicator number={4} title="Review Results" />
      </div>

      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: '600',
        color: '#111827',
        borderBottom: '3px solid #2563eb',
        paddingBottom: '0.75rem',
        marginTop: '3rem',
        marginBottom: '1.5rem'
      }}>Quick Links</h2>
      
      <QuickLinks links={[
        { text: 'API Configuration Guide', href: '#api-config' },
        { text: 'Test Case Setup', href: '#test-case' },
        { text: 'Execution & Reports', href: '#execution' },
        { text: 'Troubleshooting', href: '#troubleshooting' }
      ]} />
    </div>
  );
}