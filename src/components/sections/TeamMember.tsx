interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

const TeamMember = ({ name, role, bio, imageUrl }: TeamMemberProps) => {
  return (
    <div className="text-center group">
      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full bg-secondary overflow-hidden shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-105">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <span className="text-3xl md:text-4xl text-muted-foreground">
              {name ? name.charAt(0) : "?"}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground mb-1">{name || "Team Member"}</h3>
      <p className="text-accent font-medium text-sm">{role || "Role"}</p>
    </div>
  );
};

export default TeamMember;
