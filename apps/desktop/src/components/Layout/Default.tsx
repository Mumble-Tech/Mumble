interface DefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    );
};